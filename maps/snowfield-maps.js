// 雪原地图表格生成函数
function displaySnowfieldMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="snowfield-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplaySnowfieldMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const snowfieldMapButtons = [
    // 地图0 (chapter: 7, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 139,
        y: 198
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 134,
        y: 130
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "茫茫雪原",
        description: "副本规模[14]",
        x: 249,
        y: 118
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "商人",
        name: "耐冻小海象",
        description: "贩卖棉衣",
        x: 106,
        y: 89
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "铁匠",
        name: "海象冰雕师",
        description: "打造短矛",
        x: 193,
        y: 102
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "铁匠",
        name: "海象附魔师",
        description: "词缀冻结",
        x: 67,
        y: 142
    },
    // 地图1 (chapter: 7, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 396,
        y: 972
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 284,
        y: 254
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "碎冰区",
        description: "副本规模[8]",
        x: 83,
        y: 605
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "寒冰墓穴",
        description: "副本规模[6]",
        x: 109,
        y: 116
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "融雪洼地",
        description: "副本规模[6]",
        x: 606,
        y: 56
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "冰魄窟",
        description: "副本规模[6]",
        x: 330,
        y: 44
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 372,
        y: 942
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 772,
        y: 650
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 481,
        y: 293
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "首领", 
        name: "徘徊的冰爪",
        description: "召唤北极熊",
        x: 765,
        y: 975
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "魔王", 
        name: "凛牙君主·乌特迦",
        description: "原始重击/冰霜投掷/暴风雪",
        x: 376,
        y: 181
    },
    // 地图2 (chapter: 7, mapId: 2)
    {
        mapId: 2,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 491,
        y: 386
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 476,
        y: 370
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 234,
        y: 185
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "魔王", 
        name: "霜喉神龙·尤克玛",
        description: "冰雨/灭魂波/急速冻结/神龙斩",
        x: 56,
        y: 286
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "魔王", 
        name: "混沌海怪·利维坦",
        description: "跳跃/冰河降临/冰河降生",
        x: 464,
        y: 40
    },
    // 地图3 (chapter: 7, mapId: 3)
    {
        mapId: 3,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 28,
        y: 450
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 56,
        y: 425
    },
    {
        mapId: 3,
        type: "npc",
        typeName: "神秘商人", 
        name: "拾荒的死亡骑士",
        description: "贩卖材料",
        x: 120,
        y: 20
    },
    // 地图4 (chapter: 7, mapId: 4)
    {
        mapId: 4,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 364,
        y: 32
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 326,
        y: 32
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 162,
        y: 112
    },
    {
        mapId: 4,
        type: "npc",
        typeName: "神秘商人", 
        name: "冰河神卫",
        description: "贩卖三叉戟",
        x: 290,
        y: 449
    },
    // 地图5 (chapter: 7, mapId: 5)
    {
        mapId: 5,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 36,
        y: 40
    },
    {
        mapId: 5,
        type: "portal",
        typeName: "城镇",
        name: "深渊隐秘住所",
        description: "",
        x: 302,
        y: 273
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 60,
        y: 60
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 279,
        y: 253
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "首领",
        name: "无名护卫",
        description: "幽怨魂灭斩",
        x: 584,
        y: 136
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "首领",
        name: "无名护法",
        description: "憎恨魂灭斩",
        x: 147,
        y: 523
    },
    // 地图6 (chapter: 7, mapId: 6)
    {
        mapId: 6,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 121,
        y: 192
    },
    {
        mapId: 6,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 121,
        y: 159
    },
    {
        mapId: 6,
        type: "portal",
        typeName: "特殊",
        name: "远古秘境",
        description: "需要等级[50]",
        x: 121,
        y: 30
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "铁匠",
        name: "秘境管家",
        description: "打造秘境套装",
        x: 93,
        y: 62
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "特殊",
        name: "秘境调谐器",
        description: "调整秘境层级",
        x: 148,
        y: 62
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "铁匠",
        name: "远古修补匠",
        description: "修复装备凹槽",
        x: 66,
        y: 184
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "铁匠",
        name: "远古回收员",
        description: "提取秘境强化",
        x: 176,
        y: 184
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "商人",
        name: "灵能转换师",
        description: "贩卖材料",
        x: 66,
        y: 151
    },
    {
        mapId: 6,
        type: "npc",
        typeName: "商人",
        name: "空军上将",
        description: "贩卖勋章",
        x: 176,
        y: 151
    }
];

// 加载并显示地图
function loadAndDisplaySnowfieldMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const snowfieldMaps = mapManager.getMapsByChapter(7);
        
        if (snowfieldMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到雪原地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        snowfieldMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = snowfieldMapButtons.filter(button => button.mapId === map.mapId);
            
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
        snowfieldMaps.forEach(map => addButtonsToSnowfieldMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToSnowfieldMap(chapter, mapId) {
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
    
    const mapButtons = snowfieldMapButtons.filter(button => button.mapId === mapId);
    
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