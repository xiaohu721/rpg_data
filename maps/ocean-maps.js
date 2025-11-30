// 海洋地图表格生成函数
function displayOceanMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="ocean-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplayOceanMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const oceanMapButtons = [
    // 地图0 (chapter: 4, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 104,
        y: 341
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "出口",
        name: "滩头",
        description: "",
        x: 371,
        y: 115
    },
    // 地图1 (chapter: 4, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "出口",
        name: "呼啸海滩",
        description: "",
        x: 32,
        y: 92
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 78,
        y: 123
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "迷失三角洲",
        description: "副本规模[10]",
        x: 105,
        y: 180
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "商人", 
        name: "荒岛救济员",
        description: "贩卖治疗瓶",
        x: 119,
        y: 95
    },
    // 地图2 (chapter: 4, mapId: 2)
    {
        mapId: 2,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 862,
        y: 60
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 571,
        y: 462
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "副本",
        name: "远古遗迹",
        description: "副本规模[6]",
        x: 31,
        y: 466
    },
    {
        mapId: 2,
        type: "portal",
        typeName: "副本",
        name: "天空之城",
        description: "副本规模[8]",
        x: 764,
        y: 946
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 875,
        y: 47
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 349,
        y: 342
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 757,
        y: 627
    },
    // 地图3 (chapter: 4, mapId: 3)
    {
        mapId: 3,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 166,
        y: 45
    },
    {
        mapId: 3,
        type: "portal",
        typeName: "副本",
        name: "深海迷城",
        description: "副本规模[8]",
        x: 551,
        y: 275
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 166,
        y: 69
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "首领",
        name: "上古传教士",
        description: "死亡一指",
        x: 166,
        y: 142
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "首领",
        name: "远古布道者",
        description: "雷咒",
        x: 166,
        y: 287
    },
    // 地图4 (chapter: 4, mapId: 4)
    {
        mapId: 4,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 43,
        y: 38
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 467,
        y: 269
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "副本",
        name: "隐秘岛屿",
        description: "副本规模[2]",
        x: 46,
        y: 461
    },
    {
        mapId: 4,
        type: "portal",
        typeName: "副本",
        name: "龙宫",
        description: "副本规模[7]",
        x: 707,
        y: 460
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 75,
        y: 38
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "首领",
        name: "海王",
        description: "旋风锤",
        x: 577,
        y: 71
    },
    // 地图5 (chapter: 4, mapId: 5)
    {
        mapId: 5,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 225,
        y: 355
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 225,
        y: 339
    },
    {
        mapId: 5,
        type: "boss",
        typeName: "魔王",
        name: "九头海蛟",
        description: "毒液冲击/再生/分裂",
        x: 226,
        y: 60
    },
    {
        mapId: 5,
        type: "npc",
        typeName: "神秘商人",
        name: "灵龙隐士",
        description: "贩卖雕纹戒指",
        x: 407,
        y: 34
    },
    {
        mapId: 5,
        type: "npc",
        typeName: "神秘商人",
        name: "魔龙隐士",
        description: "贩卖宝石戒指",
        x: 42,
        y: 34
    },
    // 地图6 (chapter: 4, mapId: 6)
    {
        mapId: 6,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 93,
        y: 317
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 111,
        y: 293
    },
    {
        mapId: 6,
        type: "boss",
        typeName: "魔王",
        name: "龙龟",
        description: "冲击波/喙咬/横冲直撞",
        x: 91,
        y: 101
    }
];

// 加载并显示地图
function loadAndDisplayOceanMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const oceanMaps = mapManager.getMapsByChapter(4);
        
        if (oceanMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到海洋地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        oceanMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = oceanMapButtons.filter(button => button.mapId === map.mapId);
            
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
        oceanMaps.forEach(map => addButtonsToOceanMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToOceanMap(chapter, mapId) {
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
    
    const mapButtons = oceanMapButtons.filter(button => button.mapId === mapId);
    
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