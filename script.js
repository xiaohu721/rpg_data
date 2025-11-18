// 动态加载CSS文件
function loadCSS(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename;
    document.head.appendChild(link);
}

// 动态加载JS文件
function loadJS(filename, callback) {
    const script = document.createElement('script');
    script.src = filename;
    script.onload = callback;
    document.head.appendChild(script);
}

// 移除之前加载的CSS文件
function removeLoadedCSS() {
    const links = document.querySelectorAll('link[href*="-equipment.css"], link[href*="-affix.css"], link[href*="-skills.css"], link[href*="-monsters.css"], link[href*="-maps.css"]');
    links.forEach(link => link.remove());
}

// 移除之前加载的JS文件
function removeLoadedJS() {
    const scripts = document.querySelectorAll('script[src*="-equipment.js"], script[src*="-affix.js"], script[src*="-skills.js"], script[src*="-monsters.js"], script[src*="-maps.js"]');
    scripts.forEach(script => script.remove());
}

// 为二级标题添加点击事件
const categoryTitles = document.querySelectorAll('.category-title');

categoryTitles.forEach(title => {
    title.addEventListener('click', function() {
        // 移除所有active类
        categoryTitles.forEach(t => t.classList.remove('active'));
        // 为当前点击的标题添加active类
        this.classList.add('active');
        
        // 更新内容区域标题
        const contentTitle = document.querySelector('.content-title');
        const contentDescription = document.querySelector('.content-description');
        
        // 根据点击的标题更新内容
        const titleText = this.textContent.trim();
        contentTitle.textContent = `${titleText}资料库`;
        
        // 根据不同标题设置不同的描述
        const descriptions = {
            '装备': '探索秘境世界中的各种装备，从普通到史诗，应有尽有',
            '技能': '学习强大的技能，提升你的战斗能力',
            '怪物': '了解各种怪物的属性和弱点，制定有效战术',
            '地图': '探索秘境世界的各个区域，发现隐藏的秘密'
        };
        
        contentDescription.textContent = descriptions[titleText] || '探索秘境世界的各种资源';
        
        // 更新内容区域
        const contentBody = document.getElementById('content-body');
        contentBody.innerHTML = `
            <p>欢迎来到${titleText}资料库！</p>
            <p>这里汇集了游戏中所有${titleText}的详细信息。</p>
            <p class="instruction">请继续探索，发现更多有趣的内容！</p>
        `;
        
        // 移除之前加载的表格相关文件
        removeLoadedCSS();
        removeLoadedJS();
    });
});

// 为三级标题添加点击事件
const subcategoryTitles = document.querySelectorAll('.subcategory-title');

subcategoryTitles.forEach(title => {
    title.addEventListener('click', function() {
        // 获取品质名称和类型
        const quality = this.textContent.trim();
        const qualityType = this.getAttribute('data-quality');
        const category = this.getAttribute('data-category');
        const colorClass = Array.from(this.classList).find(cls => cls.startsWith('subcategory-'));
        let color = '#4cc9f0'; // 默认颜色
        
        // 设置不同分类的颜色
        if (colorClass === 'subcategory-common') color = '#4a8fe7';
        else if (colorClass === 'subcategory-unique') color = '#a855f7';
        else if (colorClass === 'subcategory-set') color = '#10b981';
        else if (colorClass === 'subcategory-epic') color = '#f59e0b';
        else if (colorClass === 'subcategory-affix') color = '#ff6b6b';
        else if (colorClass === 'subcategory-gem') color = '#00d4ff';
        else if (colorClass === 'subcategory-attribute') color = '#06b6d4';
        else if (colorClass === 'subcategory-profession') color = '#ef4444';
        else if (colorClass === 'subcategory-mastery') color = '#f97316';
        else if (colorClass === 'subcategory-normal') color = '#84cc16';
        else if (colorClass === 'subcategory-boss') color = '#dc2626';
        else if (colorClass === 'subcategory-property') color = '#7e22ce';
        else if (colorClass === 'subcategory-prologue') color = '#0ea5e9';
        else if (colorClass === 'subcategory-oasis') color = '#22c55e';
        else if (colorClass === 'subcategory-desert') color = '#eab308';
        else if (colorClass === 'subcategory-hell') color = '#ef4444';
        else if (colorClass === 'subcategory-ocean') color = '#3b82f6';
        else if (colorClass === 'subcategory-sky') color = '#8b5cf6';
        else if (colorClass === 'subcategory-city') color = '#6b7280';
        else if (colorClass === 'subcategory-snowfield') color = '#d1d5db';
        else if (colorClass === 'subcategory-lightdark') color = '#1e293b';
        
        // 更新内容区域标题
        const contentTitle = document.querySelector('.content-title');
        const contentDescription = document.querySelector('.content-description');
        
        // 根据不同分类设置不同的标题和描述
        let titleText = '';
        let description = '';
        
        if (category === 'equipment') {
            if (qualityType === 'gem') {
                titleText = '宝石';
                description = '探索秘境世界中的各种宝石';
            } else {
                if (qualityType === 'affix') {
                titleText = '词缀';
                description = '探索秘境世界中的装备词缀';
                } else {
                    titleText = `${quality}装备`;
                    description = `探索秘境世界中的${quality}品质装备`;
                }
            }
        } else if (category === 'skills') {
            titleText = `${quality}技能`;
            description = `探索秘境世界中的${quality}技能系统`;
        } else if (category === 'monsters') {
            titleText = `${quality}`;
            description = `探索秘境世界中的${quality}信息`;
        } else if (category === 'maps') {
            titleText = `${quality}`;
            description = `探索秘境世界中的${quality}区域`;
        }
        
        contentTitle.textContent = titleText;
        contentTitle.style.color = color;
        contentDescription.textContent = description;
        
        // 移除之前加载的表格相关文件
        removeLoadedCSS();
        removeLoadedJS();
        
        // 根据分类和品质类型动态加载对应的CSS和JS文件
        let folder = category;
        let filePrefix = qualityType;
        
        // 确定文件路径
        let cssFile = `${folder}/${filePrefix}-${category}.css`;
        let jsFile = `${folder}/${filePrefix}-${category}.js`;
        
        // 加载CSS文件
        loadCSS(cssFile);
        
        // 加载JS文件并调用对应的表格生成函数
        loadJS(jsFile, function() {
            // 构建函数名
            let functionName = `display${capitalizeFirstLetter(filePrefix)}${capitalizeFirstLetter(category)}Table`;
            
            if (typeof window[functionName] === 'function') {
                window[functionName](document.getElementById('content-body'), quality, color);
            } else {
                console.error(`函数 ${functionName} 未找到`);
                // 如果函数未找到，显示默认内容
                const contentBody = document.getElementById('content-body');
                contentBody.innerHTML = `
                    <p>欢迎来到${titleText}资料库！</p>
                    <p>${description}</p>
                    <p class="instruction">当前展示的是<span style="color: ${color}">${quality}</span>的内容。</p>
                    <p>表格功能正在开发中，敬请期待。</p>
                `;
            }
        });
    });
});

// 首字母大写函数
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 默认激活装备分类
    const defaultCategory = document.querySelector('.category-title');
    if (defaultCategory) {
        defaultCategory.classList.add('active');
    }
});