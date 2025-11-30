// 天空地图表格生成函数
function displaySkyMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="sky-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplaySkyMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const skyMapButtons = [
    // 地图0 (chapter: 5, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 454,
        y: 50
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "城镇",
        name: "空中驿站",
        description: "",
        x: 434,
        y: 487
    },
    {
        mapId: 0,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 475,
        y: 30
    },
    {
        mapId: 0,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 25,
        y: 568
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "神秘商人",
        name: "精灵旗手",
        description: "贩卖披风/战旗",
        x: 434,
        y: 650
    },
    // 地图1 (chapter: 5, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 82,
        y: 73
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 34,
        y: 73
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "空间垃圾站",
        description: "副本规模[4]",
        x: 136,
        y: 73
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "天界竞技场",
        description: "副本规模[1]",
        x: 82,
        y: 24
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "风神王座",
        description: "副本规模[8]",
        x: 82,
        y: 121
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "商人",
        name: "珍宝收藏家",
        description: "贩卖水晶剑/能量球",
        x: 34,
        y: 32
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "商人",
        name: "奥秘收藏家",
        description: "贩卖法衣/法鞋",
        x: 34,
        y: 113
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "铁匠",
        name: "神话造物者",
        description: "萃取普通装备",
        x: 128,
        y: 32
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "铁匠",
        name: "虚空附魔师",
        description: "重置稀有装备",
        x: 128,
        y: 113
    },
    // 地图2 (chapter: 5, mapId: 2)
    {
        mapId: 2,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 295,
        y: 27
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 240,
        y: 109
    },
    {
        mapId: 2,
        type: "boss",
        typeName: "首领",
        name: "云霄领主",
        description: "折跃斩",
        x: 322,
        y: 545
    },
    // 地图3 (chapter: 5, mapId: 3)
    {
        mapId: 3,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 785,
        y: 43
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 807,
        y: 23
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 370,
        y: 286
    },
    {
        mapId: 3,
        type: "boss",
        typeName: "魔王",
        name: "风神翼龙",
        description: "飓风/寒风/召唤飞龙",
        x: 48,
        y: 292
    },
    // 地图4 (chapter: 5, mapId: 4)
    {
        mapId: 4,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 89,
        y: 99
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 89,
        y: 128
    },
    {
        mapId: 4,
        type: "boss",
        typeName: "魔王",
        name: "雷霆领主",
        description: "天雷/雷暴/聚能一击/激流",
        x: 89,
        y: 50
    }
];

// 加载并显示地图
function loadAndDisplaySkyMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const skyMaps = mapManager.getMapsByChapter(5);
        
        if (skyMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到天空地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        skyMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = skyMapButtons.filter(button => button.mapId === map.mapId);
            
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
        skyMaps.forEach(map => addButtonsToSkyMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToSkyMap(chapter, mapId) {
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
    
    const mapButtons = skyMapButtons.filter(button => button.mapId === mapId);
    
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