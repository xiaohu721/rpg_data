// 地狱地图表格生成函数
function displayHellMapsTable(contentBody, quality, color) {
    // 创建容器
    const containerHTML = `
        <div class="hell-container">
            <div id="maps-content">
                <div class="map-loading">正在加载地图数据...</div>
            </div>
        </div>
    `;
    
    contentBody.innerHTML = containerHTML;
    loadAndDisplayHellMaps();
}

// 地图按钮数据 - 使用PS中的像素坐标（左上角为原点）
const hellMapButtons = [
    // 地图0 (chapter: 3, mapId: 0)
    {
        mapId: 0,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 200,
        y: 80
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "传送小站",
        name: "",
        description: "快速传送",
        x: 161,
        y: 80
    },
    {
        mapId: 0,
        type: "portal",
        typeName: "副本",
        name: "无间炼狱",
        description: "副本规模[20]",
        x: 14,
        y: 80
    },
    {
        mapId: 0,
        type: "npc",
        typeName: "商人",
        name: "正义使者",
        description: "贩卖秘银甲",
        x: 187,
        y: 52
    },
    // 地图1 (chapter: 3, mapId: 1)
    {
        mapId: 1,
        type: "portal",
        typeName: "起点",
        name: "",
        description: "进图位置",
        x: 867,
        y: 839
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 897,
        y: 811
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 732,
        y: 253
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "祭坛", 
        name: "",
        description: "复活点",
        x: 122,
        y: 338
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "首领", 
        name: "地狱兽人战神",
        description: "践踏",
        x: 511,
        y: 286
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "首领", 
        name: "鲜血领主",
        description: "邪恶怒吼",
        x: 510,
        y: 733
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "首领", 
        name: "罪恶领主",
        description: "恐怖嚎叫",
        x: 185,
        y: 733
    },
    {
        mapId: 1,
        type: "boss",
        typeName: "魔王", 
        name: "破坏之王",
        description: "火雨/践踏/法力燃烧/横扫",
        x: 106,
        y: 58
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "神秘商人", 
        name: "苍白死神",
        description: "贩卖镰刀",
        x: 140,
        y: 623
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "神秘商人", 
        name: "黑暗死神",
        description: "贩卖巫师之刃",
        x: 230,
        y: 623
    },
    {
        mapId: 1,
        type: "npc",
        typeName: "铁匠", 
        name: "地狱祭坛",
        description: "打造随机史诗装备",
        x: 106,
        y: 22
    }
];

// 加载并显示地图
function loadAndDisplayHellMaps() {
    const mapsContent = document.getElementById('maps-content');
    
    try {
        const hellMaps = mapManager.getMapsByChapter(3);
        
        if (hellMaps.length === 0) {
            mapsContent.innerHTML = '<div class="map-error">未找到地狱地图数据</div>';
            return;
        }
        
        // 生成地图HTML
        let mapsHTML = '';
        hellMaps.forEach(map => {
            const imagePath = mapManager.getMapImagePath(map.chapter, map.mapId, map.name);
            const mapButtons = hellMapButtons.filter(button => button.mapId === map.mapId);
            
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
        hellMaps.forEach(map => addButtonsToHellMap(map.chapter, map.mapId));
        
    } catch (error) {
        console.error('加载地图失败:', error);
        mapsContent.innerHTML = '<div class="map-error">加载地图数据时出错，请刷新页面重试</div>';
    }
}

// 为地图添加按钮（简化版）
function addButtonsToHellMap(chapter, mapId) {
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
    
    const mapButtons = hellMapButtons.filter(button => button.mapId === mapId);
    
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