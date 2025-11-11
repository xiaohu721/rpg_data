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
    const links = document.querySelectorAll('link[href*="-equipment.css"], link[href*="-affix.css"]');
    links.forEach(link => link.remove());
}

// 移除之前加载的JS文件
function removeLoadedJS() {
    const scripts = document.querySelectorAll('script[src*="-equipment.js"], script[src*="-affix.js"]');
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
            'NPC': '结识游戏中的重要NPC，了解他们的故事和功能',
            '天赋': '定制你的角色天赋，打造独特的游戏风格',
            '宝石': '镶嵌宝石提升装备属性，获得额外能力'
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
        const colorClass = Array.from(this.classList).find(cls => cls.startsWith('subcategory-'));
        let color = '#4cc9f0'; // 默认颜色
        
        if (colorClass === 'subcategory-common') color = '#4a8fe7';
        else if (colorClass === 'subcategory-unique') color = '#a855f7';
        else if (colorClass === 'subcategory-set') color = '#10b981';
        else if (colorClass === 'subcategory-epic') color = '#f59e0b';
        else if (colorClass === 'subcategory-affix') color = '#ff6b6b'; // 装备词缀使用红色
        
        // 更新内容区域标题
        const contentTitle = document.querySelector('.content-title');
        const contentDescription = document.querySelector('.content-description');
        
        // 根据不同类型设置不同的标题
        if (qualityType === 'affix') {
            contentTitle.textContent = `${quality}`;
            contentDescription.textContent = `探索秘境世界中的装备${quality}`;
        } else {
            contentTitle.textContent = `${quality}装备`;
            contentDescription.textContent = `探索秘境世界中的${quality}品质装备`;
        }
        
        contentTitle.style.color = color;
        
        // 移除之前加载的表格相关文件
        removeLoadedCSS();
        removeLoadedJS();
        
        // 动态加载对应的CSS和JS文件
        if (qualityType === 'common' || qualityType === 'unique' || qualityType === 'set' || qualityType === 'epic' || qualityType === 'affix') {
            // 确定文件前缀
            let filePrefix = qualityType;
            filePrefix = `${qualityType}-equipment`;
            
            loadCSS(`${filePrefix}.css`);
            loadJS(`${filePrefix}.js`, function() {
                // 调用对应的表格生成函数
                let functionName;
                if (qualityType === 'affix') {
                    functionName = 'displayEquipmentAffixTable';
                } else {
                    functionName = `display${qualityType.charAt(0).toUpperCase() + qualityType.slice(1)}EquipmentTable`;
                }
                
                if (typeof window[functionName] === 'function') {
                    window[functionName](document.getElementById('content-body'), quality, color);
                } else {
                    console.error(`函数 ${functionName} 未找到`);
                    // 如果函数未找到，显示默认内容
                    const contentBody = document.getElementById('content-body');
                    contentBody.innerHTML = `
                        <p>欢迎来到${quality}资料库！</p>
                        <p>表格功能正在开发中，敬请期待。</p>
                    `;
                }
            });
        } else {
            // 其他品质的内容
            const contentBody = document.getElementById('content-body');
            const qualityDescriptions = {
                '套装': '收集多件可激活额外效果，是中期玩家的主要目标'
            };
            
            contentBody.innerHTML = `
                <p>欢迎来到${quality}装备资料库！</p>
                <p>${qualityDescriptions[quality] || '探索秘境世界中的各种装备'}</p>
                <p class="instruction">当前展示的是<span style="color: ${color}">${quality}</span>品质的装备列表。</p>
                <p>请继续探索其他品质的装备，发现更多强大的物品！</p>
            `;
        }
    });
});