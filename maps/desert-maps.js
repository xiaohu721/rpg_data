// 沙漠地图表格生成函数
function displayDesertMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="desert-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplayDesertMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const desertMapButtons = [
    // 地图0 (chapter: 2, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 79,
        y: 94
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 108,
        y: 78
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "大荒原",
        description: "副本规模[6]",
        x: 25,
        y: 110
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "商人",
        name: "黑石商贩",
        description: "贩卖锁子甲/板甲",
        x: 140,
        y: 67
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "铁匠",
        name: "黑石铁匠",
        description: "升级装备",
        x: 84,
        y: 54
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "特殊",
        name: "矿场工头",
        description: "采矿小游戏",
        x: 117,
        y: 110
    },
    // 地图1 (chapter: 2, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 729,
        y: 733
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "出口",
        name: "墓穴入口",
        description: "",
        x: 604,
        y: 388
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "城镇",
        name: "黄沙城",
        description: "",
        x: 48,
        y: 149
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 724,
        y: 695
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 448,
        y: 206
    },
    // 地图2 (chapter: 2, mapId: 2)
    {
        mapId: 2,
        type: "portal",
        typeName: "出口",
        name: "大荒原",
        description: "",
        x: 95,
        y: 69
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 32,
        y: 28
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "副本",
        name: "守望者之墓",
        description: "副本规模[8]",
        x: 32,
        y: 108
    },
    // 地图3 (chapter: 2, mapId: 3)
    {
        mapId: 3,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 504,
        y: 332
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 494,
        y: 324
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 175,
        y: 51
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "魔王",
        name: "尸蹩王",
        description: "地刺/冲顶/蝗虫群/召唤尸蹩",
        x: 298,
        y: 40
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "神秘商人",
        name: "骸骨商贩",
        description: "贩卖手杖/骨杖",
        x: 508,
        y: 24
    },
    // 地图4 (chapter: 2, mapId: 4)
    {
        mapId: 4,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 406,
        y: 124
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 131,
        y: 107
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "副本",
        name: "豪华洞穴",
        description: "副本规模[6]",
        x: 352,
        y: 30
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "副本",
        name: "无边沙漠",
        description: "副本规模[8]",
        x: 25,
        y: 107
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "任务",
        name: "穴居人♂",
        description: "领取装备[蚕丝衣]",
        x: 390,
        y: 36
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "商人",
        name: "刀哥",
        description: "贩卖砍刀/锐匕",
        x: 195,
        y: 67
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "商人",
        name: "铸盾师",
        description: "贩卖鸢尾盾/战盾",
        x: 66,
        y: 67
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "商人",
        name: "酒保",
        description: "贩卖能量瓶",
        x: 146,
        y: 169
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "商人",
        name: "兽族第一巴图鲁",
        description: "贩卖爪",
        x: 102,
        y: 156
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "铁匠",
        name: "手工坊坊主",
        description: "打造手工武器",
        x: 199,
        y: 166
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "铁匠",
        name: "工坊老板娘",
        description: "打造手工护甲",
        x: 211,
        y: 178
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "铁匠",
        name: "熔炉护卫",
        description: "打造铁器护甲",
        x: 141,
        y: 70
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "铁匠",
        name: "熔炉监工",
        description: "打造铁器武器",
        x: 120,
        y: 70
    },
    // 地图5 (chapter: 2, mapId: 5)
    {
        mapId: 5,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 995,
        y: 255
    },
    {
        mapId: 5,
        type: "portal",
        typeName: "副本",
        name: "被遗忘的古墓",
        description: "副本规模[10]",
        x: 87,
        y: 93
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 994,
        y: 208
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 522,
        y: 102
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "首领",
        name: "风暴天选豺狼人",
        description: "闪电一指",
        x: 527,
        y: 59
    },
    // 地图6 (chapter: 2, mapId: 6)
    {
        mapId: 6,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 656,
        y: 468
    },
    {
        mapId: 6,
        type: "portal",
        typeName: "城镇",
        name: "地狱入口",
        description: "",
        x: 27,
        y: 255
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 665,
        y: 456
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 470,
        y: 255
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "首领",
        name: "血肉守卫",
        description: "重生",
        x: 50,
        y: 74
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "首领",
        name: "血肉守卫",
        description: "重生",
        x: 68,
        y: 428
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "魔王",
        name: "千魂之首",
        description: "召唤：骷髅战士/射手，残废/尸爆",
        x: 86,
        y: 255
    },
    // 地图7 (chapter: 2, mapId: 7)
    {
        mapId: 7,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 150,
        y: 483
    },
    {
        mapId: 7,
        type: "npc",
        typeName: "任务",
        name: "穴居人♀",
        description: "领取装备[双生吊坠]",
        x: 119,
        y: 33
    },
    {
        mapId: 7,
        type: "boss",
        typeName: "首领",
        name: "狂野牛头人",
        description: "粉碎重击",
        x: 41,
        y: 132
    },
    {
        mapId: 7,
        type: "boss",
        typeName: "首领",
        name: "震撼牛头人",
        description: "地震波",
        x: 259,
        y: 132
    },
    {
        mapId: 7,
        type: "boss",
        typeName: "魔王",
        name: "暴徒·奈托尔",
        description: "地震波/粉碎重击/重生",
        x: 150,
        y: 36
    }
];

// 加载并显示地图
function loadAndDisplayDesertMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const desertMaps = mapManager.getMapsByChapter(2);
        
        if (desertMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到沙漠地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        desertMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = desertMapButtons.filter(button => button.mapId === map.mapId);
            
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
        desertMaps.forEach(map => addButtonsToDesertMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToDesertMap(chapter, mapId) {
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
    
    const mapButtons = desertMapButtons.filter(button => button.mapId === mapId);
    
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