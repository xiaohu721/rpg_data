// 地图数据管理器 - 包含按钮信息
class MapDataManager {
    constructor() {
        // 内置地图数据
        this.mapData = [
            // 序章地图
            { chapter: 0, mapId: 0, name: "隐秘洞穴" },
            { chapter: 0, mapId: 1, name: "潮湿地道" },
            
            // 绿洲地图
            { chapter: 1, mapId: 0, name: "桃林村" },
            { chapter: 1, mapId: 1, name: "松树林" },
            { chapter: 1, mapId: 2, name: "东部群岛" },
            { chapter: 1, mapId: 3, name: "巨木林营地" },
            { chapter: 1, mapId: 4, name: "西北巨木林" },
            { chapter: 1, mapId: 5, name: "西南巨木林" },
            { chapter: 1, mapId: 6, name: "东南巨木林" },
            { chapter: 1, mapId: 7, name: "东北巨木林" },
            
            // 荒漠地图
            { chapter: 2, mapId: 0, name: "峡谷据点" },
            { chapter: 2, mapId: 1, name: "大荒原" },
            { chapter: 2, mapId: 2, name: "墓穴入口" },
            { chapter: 2, mapId: 3, name: "守望者之墓" },
            { chapter: 2, mapId: 4, name: "黄沙城" },
            { chapter: 2, mapId: 5, name: "无边沙漠" },
            { chapter: 2, mapId: 6, name: "被遗忘的古墓" },
            { chapter: 2, mapId: 7, name: "豪华洞穴" },
            
            // 地狱地图
            { chapter: 3, mapId: 0, name: "地狱入口" },
            { chapter: 3, mapId: 1, name: "无间炼狱" },
            
            // 海洋地图
            { chapter: 4, mapId: 0, name: "呼啸海滩" },
            { chapter: 4, mapId: 1, name: "滩头" },
            { chapter: 4, mapId: 2, name: "迷失三角洲" },
            { chapter: 4, mapId: 3, name: "远古遗迹" },
            { chapter: 4, mapId: 4, name: "深海迷城" },
            { chapter: 4, mapId: 5, name: "龙宫" },
            { chapter: 4, mapId: 6, name: "隐秘岛屿" },
            
            // 天空地图
            { chapter: 5, mapId: 0, name: "天空之城" },
            { chapter: 5, mapId: 1, name: "空中驿站" },
            { chapter: 5, mapId: 2, name: "空间垃圾站" },
            { chapter: 5, mapId: 3, name: "风神王座" },
            { chapter: 5, mapId: 4, name: "天界竞技场" },
            
            // 城邦地图
            { chapter: 6, mapId: 0, name: "日光城" },
            { chapter: 6, mapId: 1, name: "地下城水道" },
            { chapter: 6, mapId: 2, name: "月光城" },
            { chapter: 6, mapId: 3, name: "地窖" },
            { chapter: 6, mapId: 4, name: "试炼之路" },
            
            // 雪原DLC地图
            { chapter: 7, mapId: 0, name: "海象栖息地" },
            { chapter: 7, mapId: 1, name: "茫茫雪原" },
            { chapter: 7, mapId: 2, name: "碎冰区" },
            { chapter: 7, mapId: 3, name: "寒冰墓穴" },
            { chapter: 7, mapId: 4, name: "融雪洼地" },
            { chapter: 7, mapId: 5, name: "冰魄窟" },
            { chapter: 7, mapId: 6, name: "深渊隐秘住所" },
            
            // 光暗DLC地图
            { chapter: 8, mapId: 0, name: "光明圣殿" },
            { chapter: 8, mapId: 1, name: "暗影深渊" }
        ];

        // 按钮信息配置
        this.buttonConfig = {
            // NPC类按钮（绿色背景）
            npc: [
                { 
                    class: "npc", 
                    icon: "fa-solid fa-coins", 
                    name: "商人"
                },
                { 
                    class: "npc", 
                    icon: "fa-solid fa-gem", 
                    name: "神秘商人"
                },
                { 
                    class: "npc", 
                    icon: "fa-solid fa-hammer", 
                    name: "铁匠"
                },
                { 
                    class: "npc", 
                    icon: "fa-solid fa-scroll", 
                    name: "任务"
                },
                { 
                    class: "npc", 
                    icon: "fa-solid fa-star", 
                    name: "特殊"
                }
            ],
            
            // BOSS类按钮（红色背景）
            boss: [
                { 
                    class: "boss", 
                    icon: "fa-solid fa-crown", 
                    name: "首领"
                },
                { 
                    class: "boss", 
                    icon: "fa-solid fa-skull", 
                    name: "魔王"
                },
                { 
                    class: "boss", 
                    icon: "fa-solid fa-heart-pulse", 
                    name: "祭坛"
                }
            ],
            
            // 传送门类按钮
            portal: [
                { 
                    class: "portal-spawn", 
                    icon: "fa-solid fa-circle", 
                    name: "起点"
                },
                { 
                    class: "portal-exit", 
                    icon: "fa-solid fa-arrow-right-from-bracket", 
                    name: "出口"
                },
                { 
                    class: "portal-dungeon", 
                    icon: "fa-solid fa-archway", 
                    name: "副本"
                },
                { 
                    class: "portal-town", 
                    icon: "fa-solid fa-archway", 
                    name: "城镇"
                },
                { 
                    class: "portal-special", 
                    icon: "fa-solid fa-archway",
                    name: "特殊"
                },
                { 
                    class: "portal-station", 
                    icon: "fa-solid fa-ring",
                    name: "传送小站"
                }
            ]
        };

        // 初始化按钮样式
        this.initButtonStyles();
    }

    // 初始化按钮样式
    initButtonStyles() {
        if (document.getElementById('map-button-styles')) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = 'map-button-styles';
        style.textContent = `
            /* 通用图标样式：圆形、居中、精简 */
            .map-icon {
                width: 20px;   /* 调整为24px */
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;  /* 图标大小相应调整 */
                border: 1px solid rgba(255,255,255,0.8);
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 0 0px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            .map-icon:hover {
                transform: scale(1.15);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.3);
                border-color: rgba(255, 255, 255, 0.9);
                filter: brightness(0.8) saturate(1.2);
            }

            /* ========== NPC类（绿色背景） ========== */
            .npc {
                background-color: #2ecc71;
            }

            /* ========== BOSS类（红色背景） ========== */
            .boss {
                background-color: #e74c3c;
            }

            /* ========== 传送门类 ========== */
            .portal-exit {
                background-color: #3498db;
            }
            .portal-dungeon {
                background-color: #9b59b6;
            }
            .portal-town {
                background-color: #f1c40f;
            }
            .portal-special {
                background-color: #ff69b4;
            }
            .portal-spawn {
                background-color: #2980b9;
            }
            .portal-station {
                background-color: #2980b9;
            }

            /* 提示框样式 */
            #map-button-tooltip {
                padding: 4px 8px;   /* 减小内边距 */
                font-size: 12px;    /* 减小字体 */
            }
            #map-button-tooltip .tooltip-title {
                font-weight: bold;
                color: #4cc9f0;     /* 使用主题色 */
            }
            #map-button-tooltip .tooltip-desc {
                color: #e6e6e6;     /* 描述文字颜色 */
            }
        `;
        
        document.head.appendChild(style);
    }

    // 根据章节获取地图数据
    getMapsByChapter(chapter) {
        return this.mapData.filter(map => map.chapter === chapter);
    }

    // 根据章节和地图ID获取特定地图
    getMap(chapter, mapId) {
        return this.mapData.find(map => map.chapter === chapter && map.mapId === mapId);
    }

    // 获取所有章节
    getChapters() {
        const chapters = [...new Set(this.mapData.map(map => map.chapter))];
        return chapters.sort((a, b) => a - b);
    }

    // 获取章节名称
    getChapterName(chapter) {
        const chapterNames = {
            0: "序章",
            1: "①绿洲", 
            2: "②荒漠",
            3: "③地狱",
            4: "④海洋",
            5: "⑤天空",
            6: "⑥城邦",
            7: "⑦雪原DLC",
            8: "⑧光暗DLC"
        };
        return chapterNames[chapter] || `章节${chapter}`;
    }

    // 生成地图图片路径
    getMapImagePath(chapter, mapId, name) {
        return `map/${chapter}-${mapId}-${name}.png`;
    }

    // 创建互动按钮
    createMapButton(buttonType, buttonName, locationName = "", tip = "", customClass = "") {
        const buttonInfo = this.buttonConfig[buttonType]?.find(btn => btn.name === buttonName);
        
        if (!buttonInfo) {
            console.error(`按钮类型 ${buttonType} 中未找到名为 ${buttonName} 的按钮`);
            return null;
        }

        const button = document.createElement('span');
        button.className = `map-icon ${buttonInfo.class} ${customClass}`;
        
        // 存储按钮信息
        button.dataset.buttonName = buttonInfo.name;
        button.dataset.locationName = locationName;
        button.dataset.tip = tip;
        
        // 创建图标
        const icon = document.createElement('i');
        icon.className = buttonInfo.icon;
        button.appendChild(icon);
        
        return button;
    }

    // 初始化按钮交互事件
    initButtonInteractions() {
        // 创建提示框元素
        let tooltip = document.getElementById('map-button-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'map-button-tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 10000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s;
                max-width: 250px;
                text-align: center;
                white-space: pre-line;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.2);
            `;
            document.body.appendChild(tooltip);
        }

        // 为所有地图按钮添加事件监听
        document.addEventListener('mouseover', function(e) {
            const mapButton = e.target.closest('.map-icon');
            if (mapButton) {
                const buttonName = mapButton.dataset.buttonName;
                const locationName = mapButton.dataset.locationName;
                const tip = mapButton.dataset.tip;
                
                if (buttonName) {
                    // 构建提示内容 - 优化换行
                    let tooltipContent = `<span class="tooltip-title">${buttonName}`;
                    if (locationName) {
                        tooltipContent += ` - ${locationName}`; // 使用空格+连字符连接，不换行
                    }
                    tooltipContent += `</span>`;
                    if (tip) {
                        tooltipContent += `<br><span class="tooltip-desc">${tip}</span>`; // 仅保留一个换行
                    }
                    
                    // 先将提示框移到屏幕外设置内容
                    tooltip.style.left = '-1000px';
                    tooltip.style.opacity = '0';
                    tooltip.innerHTML = tooltipContent;
                    tooltip.style.display = 'block';
                    
                    // 获取按钮位置信息
                    const rect = mapButton.getBoundingClientRect();
                    const scrollX = window.scrollX || document.documentElement.scrollLeft;
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    
                    // 计算提示框位置 - 按钮正上方居中
                    const tooltipLeft = rect.left + scrollX + (rect.width / 2);
                    const tooltipTop = rect.top + scrollY - tooltip.offsetHeight - 5; // 距离按钮顶部5px间距
                    
                    tooltip.style.left = `${tooltipLeft}px`;
                    tooltip.style.top = `${tooltipTop}px`;
                    tooltip.style.transform = 'translateX(-50%)'; // 水平居中
                    tooltip.style.opacity = '1';
                }
            }
        });

        document.addEventListener('mouseout', function(e) {
            const mapButton = e.target.closest('.map-icon');
            if (mapButton) {
                tooltip.style.opacity = '0';
                tooltip.style.display = 'none';
            }
        });
    }
}

// 创建全局地图数据管理器实例
const mapManager = new MapDataManager();

// 页面加载完成后初始化按钮交互
document.addEventListener('DOMContentLoaded', function() {
    mapManager.initButtonInteractions();
});