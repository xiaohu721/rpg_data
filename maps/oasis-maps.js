// 绿洲地图表格生成函数
function displayOasisMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="oasis-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplayOasisMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const oasisMapButtons = [
    // 地图0 (chapter: 1, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "出口",
        name: "潮湿地道",
        description: "",
        x: 215,
        y: 202
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 112,
        y: 175
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "任务",
        name: "饲养员",
        description: "领取宠物",
        x: 152,
        y: 156
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "商人",
        name: "猎户",
        description: "贩卖战斧/圆盾",
        x: 52,
        y: 206
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "商人",
        name: "织女",
        description: "贩卖布甲/布鞋",
        x: 56,
        y: 176
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "任务",
        name: "农场主",
        description: "领取装备[仙桃]",
        x: 114,
        y: 44
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "松树林",
        description: "副本规模[3]",
        x: 53,
        y: 40
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "东部群岛",
        description: "副本规模[5]",
        x: 278,
        y: 103
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "城镇",
        name: "峡谷据点",
        description: "需要等级[10]",
        x: 247,
        y: 52
    },
    // 地图1 (chapter: 1, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 187,
        y: 602
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 212,
        y: 547
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 211,
        y: 119
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "首领", 
        name: "野人族长",
        description: "重击/跳跃重击",
        x: 148,
        y: 47
    },
    // 地图2 (chapter: 1, mapId: 2)
    {
        mapId: 2,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 61,
        y: 496
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 70,
        y: 470
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 488,
        y: 237
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "城镇", 
        name: "巨木林营地",
        description: "",
        x: 225,
        y: 47
    },
    // 地图3 (chapter: 1, mapId: 3)
    {
        mapId: 3,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 115,
        y: 132
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 115,
        y: 99
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "任务",
        name: "向导",
        description: "领取经验金币",
        x: 126,
        y: 71
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "特殊",
        name: "巨木杀手",
        description: "伐木小游戏",
        x: 103,
        y: 67
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "商人",
        name: "魔导师",
        description: "贩卖长杖/魔法书",
        x: 73,
        y: 101
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "商人",
        name: "武器大师",
        description: "贩卖战锤/双头斧",
        x: 156,
        y: 101
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "副本",
        name: "西北巨木林",
        description: "副本规模[4]",
        x: 55,
        y: 47
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "副本",
        name: "西南巨木林",
        description: "副本规模[5]",
        x: 55,
        y: 152
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "副本",
        name: "东南巨木林",
        description: "副本规模[4]",
        x: 175,
        y: 152
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "副本",
        name: "东北巨木林",
        description: "副本规模[5]",
        x: 175,
        y: 47
    },
    // 地图4 (chapter: 1, mapId: 4)
    {
        mapId: 4,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 556,
        y: 442
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 497,
        y: 427
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "首领",
        name: "食人魔西北大将军",
        description: "震荡波/MISS转暴击",
        x: 131,
        y: 386
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "出口",
        name: "湖心岛",
        description: "",
        x: 336,
        y: 119
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "出口",
        name: "西北巨木林",
        description: "",
        x: 74,
        y: 136
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "神秘商人",
        name: "丛林破坏者",
        description: "贩卖棒槌",
        x: 128,
        y: 67
    },
    // 地图5 (chapter: 1, mapId: 5)
    {
        mapId: 5,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 554,
        y: 38
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 487,
        y: 70
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "首领",
        name: "食人魔炎阳护法",
        description: "炎爆/MISS转暴击",
        x: 83,
        y: 138
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "首领",
        name: "食人魔冬日护法",
        description: "冰爆/MISS转暴击",
        x: 520,
        y: 397
    },
    // 地图6 (chapter: 1, mapId: 6)
    {
        mapId: 6,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 30,
        y: 30
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 56,
        y: 26
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "魔王",
        name: "树魔巫神",
        description: "召唤：树人/治疗守卫/震荡守卫/洞察守卫",
        x: 139,
        y: 436
    },
    {
        mapId: 6,
        type: "portal",
        typeName: "副本",
        name: "呼啸海滩",
        description: "副本规模[2]",
        x: 139,
        y: 495
    },
    // 地图7 (chapter: 1, mapId: 7)
    {
        mapId: 7,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 42,
        y: 488
    },
    {
        mapId: 7,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 94,
        y: 448
    },
    {
        mapId: 7,
        type: "boss",
        typeName: "魔王",
        name: "食人魔国王",
        description: "回响震波/虹吸/践踏/MISS转暴击",
        x: 559,
        y: 47
    }
];

// 加载并显示地图
function loadAndDisplayOasisMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const oasisMaps = mapManager.getMapsByChapter(1);
        
        if (oasisMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到绿洲地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        oasisMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = oasisMapButtons.filter(button => button.mapId === map.mapId);
            
            mapsHTML += `
                <div class="map-item">
                    <h3 class="map-title">${map.name}</h3>
                    <div class="map-image-container" id="map-container-${map.chapter}-${map.mapId}">
                        <img src="${imagePath}" alt="${map.name}" class="map-image" id="map-image-${map.chapter}-${map.mapId}">
                        <div class="map-buttons-container" id="map-buttons-${map.chapter}-${map.mapId}"></div>
                    </div>
                </div>
            `;
        });
        
        mapsContent.innerHTML = mapsHTML;
        oasisMaps.forEach(map => addButtonsToOasisMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToOasisMap(chapter, mapId) {
    const buttonsContainer = document.getElementById(`map-buttons-${chapter}-${mapId}`);
    const mapImage = document.getElementById(`map-image-${chapter}-${mapId}`);
    
    if (!buttonsContainer || !mapImage) return;
    
    // 简化容器样式
    buttonsContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    `;
    document.getElementById(`map-container-${chapter}-${mapId}`).style.position = 'relative';
    
    const mapButtons = oasisMapButtons.filter(button => button.mapId === mapId);
    
    // 简化位置计算逻辑
    const updateButtonPositions = () => {
        // 直接使用图片显示尺寸（含边框）
        const displayWidth = mapImage.offsetWidth;
        const displayHeight = mapImage.offsetHeight;
        // 原始图片尺寸
        const originalWidth = mapImage.naturalWidth;
        const originalHeight = mapImage.naturalHeight;
        
        // 计算缩放比例
        const scaleX = displayWidth / originalWidth;
        const scaleY = displayHeight / originalHeight;
        
        mapButtons.forEach(buttonData => {
            const button = mapManager.createMapButton(
                buttonData.type,
                buttonData.typeName,
                buttonData.name,
                buttonData.description
            );
            
            if (button) {
                // 计算调整后坐标
                const adjustedX = buttonData.x * scaleX;
                const adjustedY = buttonData.y * scaleY;
                
                button.style.cssText = `
                    position: absolute;
                    pointer-events: all;
                    z-index: 10;
                    left: ${adjustedX}px;
                    top: ${adjustedY}px;
                    transform: translate(-50%, -50%);
                `;
                
                buttonsContainer.appendChild(button);
            }
        });
    };
    
    // 图片加载完成后计算
    mapImage.onload = updateButtonPositions;
    // 已加载完成则直接更新
    if (mapImage.complete) updateButtonPositions();
}