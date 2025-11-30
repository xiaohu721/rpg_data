// 序章地图表格生成函数
function displayPrologueMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="prologue-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplayMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const prologueMapButtons = [
    // 隐秘洞穴 (chapter: 0, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 105,
        y: 116
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "特殊",
        name: "时空行者",
        description: "小号快速解锁任务",
        x: 154,
        y: 70
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 73,
        y: 157
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "潮湿地道",
        description: "副本规模[1]",
        x: 69,
        y: 116
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "出口",
        name: "测试大厅",
        description: "仅测试服开放",
        x: 193,
        y: 81
    },
    // 潮湿地道 (chapter: 0, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 49,
        y: 394
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛",
        name: "",
        description: "复活点",
        x: 50,
        y: 374
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "出口",
        name: "桃林村",
        description: "",
        x: 118,
        y: 121
    },
    {
        mapId: 1,
        type: "portal",
        typeName: "副本",
        name: "地下城水道",
        description: "副本规模[8]",
        x: 172,
        y: 355
    }
];

// 加载并显示地图
function loadAndDisplayMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const prologueMaps = mapManager.getMapsByChapter(0);
        
        if (prologueMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到序章地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        prologueMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = prologueMapButtons.filter(button => button.mapId === map.mapId);
            
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
        prologueMaps.forEach(map => addButtonsToMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToMap(chapter, mapId) {
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
    
    const mapButtons = prologueMapButtons.filter(button => button.mapId === mapId);
    
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