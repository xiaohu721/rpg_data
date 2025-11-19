// 专精表格生成函数
function displayMasterySkillsTable(contentBody, quality, color) {
    // 角色名称与技能ID映射表
    const characterSkillMap = {
        // 力量职业组合
        "110": { name: "炎魔", skillId: "110", headIcon: "hero/BTNHeroAvatarOfFlame.bmp" },
        "120": { name: "雷神", skillId: "120", headIcon: "hero/BTNHeroMountainKing.bmp" },
        "130": { name: "冰川勇士", skillId: "130", headIcon: "hero/BTNNagaMyrmidon.bmp"},
        "140": { name: "狂战士", skillId: "140", headIcon: "hero/BTNChaosGrom.bmp" },
        "150": { name: "圣骑士", skillId: "150", headIcon: "hero/BTNHeroPaladin.bmp" },
        "160": { name: "深渊守卫", skillId: "160", headIcon: "hero/BTNPitLord.bmp" },
        
        // 灵巧职业组合
        "210": { name: "烈火刀客", skillId: "210", headIcon: "hero/BTNFireBrewMaster.bmp" },
        "220": { name: "暴风之爪", skillId: "220", headIcon: "hero/BTNShaman.bmp" },
        "230": { name: "冰霜海妖", skillId: "230", headIcon: "hero/BTNSeaWitch.bmp" },
        "240": { name: "刺客", skillId: "240", headIcon: "hero/BTNHeroWarden.bmp" },
        "250": { name: "光剑士", skillId: "250", headIcon: "hero/BTNArthas.bmp" },
        "260": { name: "暗影猎手", skillId: "260", headIcon: "hero/BTNHeroDemonHunter.bmp" },
        
        // 智力职业组合
        "310": { name: "火巫", skillId: "310", headIcon: "hero/BTNHeroBloodElfPrince.bmp" },
        "320": { name: "御风者", skillId: "320", headIcon: "hero/BTNFurion.bmp" },
        "330": { name: "冰雪法师", skillId: "330", headIcon: "hero/BTNJaina.bmp" },
        "340": { name: "战斗法师", skillId: "340", headIcon: "hero/BTNSpellBreaker.bmp" },
        "350": { name: "光辉女士", skillId: "350", headIcon: "hero/BTNSorceress.bmp" },
        "360": { name: "邪恶巫师", skillId: "360", headIcon: "hero/BTNLichVersion2.bmp" },
        
        // 统御职业组合
        "410": { name: "地狱领主", skillId: "410", headIcon: "hero/BTNKiljaedin.bmp" },
        "420": { name: "风暴之子", skillId: "420", headIcon: "hero/BTNStormBrewMaster.bmp" },
        "430": { name: "寒冬领主", skillId: "430", headIcon: "hero/BTNRevenant.bmp" },
        "440": { name: "战争领主", skillId: "440", headIcon: "hero/BTNBeastMaster.bmp" },
        "450": { name: "神使", skillId: "450", headIcon: "hero/BTNPriest.bmp" },
        "460": { name: "黑暗领主", skillId: "460", headIcon: "hero/BTNArchimonde.bmp" }
    };

    // 内置的专精JSON数据
    const masteryData = [
  {
    "id": "110",
    "mainArea": {
      "icon": "skill/BTNBreathOfFire.png",
      "name": "火焰吐息",
      "description": "开始引导，向一个方向喷吐火焰来宣泄怒火，被命中的敌人会受到和你最大生命值有关的法术比例的元素伤害，每次喷火都会消耗法力（引导技能会被命令/控制或者法力不足中断，没有引导时间的技能若不被中断将一直持续很长时间）"
    },
    "dataArea": [
      "基础冷却：2",
      "影响半径：100",
      "法术比例：20%/30%/40%",
      "影响距离：600",
      "伤害间隔：0.5",
      "最大生命加成：0.01",
      "施放距离：800",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill16.png",
        "text": "沸腾鲜血[1]",
        "tooltip": "持续消耗生命，速度和你的生命回复一致，每消耗[1]生命，造成额外[1]%法术比例的伤害"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "扇形火焰[1]",
        "tooltip": "影响距离减[300]，影响半径加[100]"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "气息不稳[3]",
        "tooltip": "每次吐息总伤害在一定的区间内浮动，最小值[80/60/40]%，最大值[140/180/220]%"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "燃尽[3]",
        "tooltip": "生命高于一半时，引导时[25/50/75]%的法力消耗会用双倍的生命值代替"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "虚无之火[2]",
        "tooltip": "法力消耗加[5/10]，法术比例减[10/20]%，最大生命加成加[0.005/0.01]"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "躁动之火[2]",
        "tooltip": "你永久的攻击速度和技能急速都会加成火焰吐息的暴击伤害，比例为[25/50]%"
      }
    ]
  },
  {
    "id": "210",
    "mainArea": {
      "icon": "skill/BTNs210.png",
      "name": "烈焰之径",
      "description": "使用技能后，你的双腿燃起火焰，增加移动速度，并在你途经的地方生成火焰对周围敌人持续造成元素伤害（此技能无法闪避/属于DOT伤害）"
    },
    "dataArea": [
      "基础冷却：15",
      "影响半径：100",
      "每秒法术比例：60%/80%/100%",
      "状态持续时间：10",
      "火焰持续时间：5",
      "移速加成：40/50/60",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill37.png",
        "text": "风火轮[1]",
        "tooltip": "烈焰之径可以暴击，每[5]点超过[300]的移动速度增加[1]暴击伤害"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "蔓延之径[2]",
        "tooltip": "法力消耗加[10/20]，影响半径加[25/50]，持续时间加[1/2]秒，火焰变的更大"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "巨人陷阱[2]",
        "tooltip": "敌人的每个等级，都会使伤害比例加[2/4]%"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "温暖[2]",
        "tooltip": "拥有状态时生命回复提高[15/30]%"
      },
      {
        "icon": "skill/miniskill38.png",
        "text": "融化[3]",
        "tooltip": "拥有状态时元素穿透加[10/20/30]"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "融铁[2]",
        "tooltip": "不再生成火焰，拥有状态时物理穿透加[20/40]"
      }
    ]
  },
  {
    "id": "310",
    "mainArea": {
      "icon": "skill/BTNSoulBurn.png",
      "name": "灵魂燃烧",
      "description": "点燃一个敌人，使它的攻击力大幅降低，并在持续时间内受到高额火焰伤害"
    },
    "dataArea": [
      "基础冷却：12",
      "持续时间：6",
      "燃烧每秒比例：60%/80%/100%",
      "",
      "",
      "攻击力降低：20%",
      "施放距离：800",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill34.png",
        "text": "折磨[2]",
        "tooltip": "持续时间加[2/4]秒，燃烧每秒比例减[20/40]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "魔力[2]",
        "tooltip": "法力消耗减[10/20]"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "助燃[2]",
        "tooltip": "目标周围[200]范围的敌人都有[25/50]%概率被点燃"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "行动受损[2]",
        "tooltip": "还会降低[50/100]移动速度"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "压制之火[2]",
        "tooltip": "攻击力降低效果加[10/20]%"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "奥术压制[2]",
        "tooltip": "法力消耗加[10/20]，也会降低目标[20/40]%法强"
      }
    ]
  },
  {
    "id": "410",
    "mainArea": {
      "icon": "skill/BTNLavaSpawn.png",
      "name": "火魔",
      "description": "召唤一个火魔为你作战，火魔为远程单位射程为[600]，持续一段时间后消失，攻击造成元素伤害，初始属性拥有额外的暴击加成"
    },
    "dataArea": [
      "基础冷却：12",
      "持续时间：24",
      "基础生命：400",
      "",
      "",
      "基础攻击和法强：60/80/100",
      "暴击加成：20/30/40",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill01.png",
        "text": "传火[3]",
        "tooltip": "火魔的攻击有[3/6/9]%概率分裂出一个全新的火魔，但每次分裂后此火魔再次分裂的概率减半，并且新生的火魔继承减半后的概率"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "无尽烈焰[2]",
        "tooltip": "持续时间加[6/12]秒"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "爆炎[2]",
        "tooltip": "暴击伤害加[30/60]"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "摇曳焰火[2]",
        "tooltip": "火魔造成的伤害变的浮动不定，最小值[75/50]%，最大值[150/200]%"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "入魔[1]",
        "tooltip": "获得[狂热]技能，受[狂热]技能树影响，但最大层数减半"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "自燃[2]",
        "tooltip": "火魔变为近战单位，基础生命加[100/200]，自身燃起烈焰每秒对周围[200]范围的敌人造成[30/60]%法术比例的元素伤害，间隔时间受火魔的技能急速影响"
      }
    ]
  },
  {
    "id": "120",
    "mainArea": {
      "icon": "skill/BTNThunderclap.png",
      "name": "雷霆一击",
      "description": "重击地面，对周围敌人造成元素伤害并使其减速"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：300",
      "攻击比例：160%/200%/240%",
      "持续时间：4",
      "速度降低：50%",
      "",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill02.png",
        "text": "破釜沉舟[1]",
        "tooltip": "法力消耗加[20]，伤害提高[40]%，但友方单位也会被雷霆一击减速，在[持久冲击][震碎装甲][动弹不得]三个节点上每投入一点，伤害多提高[20]%"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "强力振波[1]",
        "tooltip": "每点力量都会使雷霆一击影响半径加[1]"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "收放自如[2]",
        "tooltip": "基础冷却减[1/2]秒，攻击比例减[20/40]%"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "持久冲击[3]",
        "tooltip": "减速的持续时间加[2/4/6]秒"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "震碎装甲[3]",
        "tooltip": "减速的同时所有抗性减[5/10/15]"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "动弹不得[2]",
        "tooltip": "减速的同时闪避减[20/40]"
      }
    ]
  },
  {
    "id": "220",
    "mainArea": {
      "icon": "skill/BTNWindWalkOn.png",
      "name": "疾风步",
      "description": "短时间内进入隐身状态并获得大量移速加成，使用技能或普攻会提前显形，若用普攻显形，本次攻击会造成额外伤害"
    },
    "dataArea": [
      "基础冷却：15",
      "",
      "攻击比例：400%/500%/600%",
      "持续时间：3",
      "移速加成：100",
      "",
      "",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill16.png",
        "text": "压制[2]",
        "tooltip": "破隐一击造成[25/50]%百分比伤害"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "闪击[2]",
        "tooltip": "你的移动速度比目标每多[1]点，破隐一击的攻击比例就多[1/2]%"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "疾风之刃[2]",
        "tooltip": "正常状态的普攻有[5/10]概率触发破隐一击"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "凯旋步伐[1]",
        "tooltip": "每当一个敌人被你击杀时，有概率自动释放疾风步，概率为[敌人等级×5]%"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "凌波微步[2]",
        "tooltip": "疾风步期间，闪避加[100/200]"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "稍作休息[3]",
        "tooltip": "疾风步期间，法力回复加[5/10/15]"
      }
    ]
  },
  {
    "id": "320",
    "mainArea": {
      "icon": "skill/BTNCyclone.png",
      "name": "飓风",
      "description": "快速形成一阵飓风吹起目标，使其被击飞[2]秒，敌人在飓风上闪避会降低很多，友军在飓风上获得[100]%减伤（飓风附加的增益和减益属于强效状态，持续时间无法被节点之外的效果增加和减少）"
    },
    "dataArea": [
      "基础冷却：15/12/9",
      "",
      "闪避减少：60",
      "",
      "",
      "",
      "施放距离：800",
      "法力消耗：0"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill24.png",
        "text": "无处遁形[2]",
        "tooltip": "闪避减少效果加[20/40]"
      },
      {
        "icon": "skill/miniskill38.png",
        "text": "风化护甲[3]",
        "tooltip": "敌人的全抗性还会减少[5/10/15]"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "晕头转向[2]",
        "tooltip": "飓风的减益效果在击飞结束后还会延续[1/2]秒"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "治愈之风[2]",
        "tooltip": "友方单位生命回复会加[50/100]每秒"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "活力之风[2]",
        "tooltip": "友方单位法力回复会加[10/20]每秒"
      },
      {
        "icon": "skill/miniskill12.png",
        "text": "愉悦风声[1]",
        "tooltip": "还会为友方单位净化负面状态"
      }
    ]
  },
  {
    "id": "420",
    "mainArea": {
      "icon": "skill/BTNMonsoon.png",
      "name": "电元素",
      "description": "召唤一个电元素为你作战，电元素为远程单位射程为[600]，没有持续时间，攻击造成元素伤害，初始属性拥有额外的移速加成"
    },
    "dataArea": [
      "基础冷却：15",
      "数量上限：2",
      "基础生命：200/400/600",
      "",
      "",
      "基础攻击和法强：80",
      "移动速度加成：40/60/80",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill31.png",
        "text": "增压[2]",
        "tooltip": "法力消耗加[10/20]，基础攻击和法强加[40/80]"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "能量溢出[3]",
        "tooltip": "每有[500/400/300]最大法力值，数量上限加[1]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "迅捷[3]",
        "tooltip": "命中加[30/60/90]，闪避加[30/60/90]"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "充能护盾[2]",
        "tooltip": "电元素的攻击为自己提供[50/100]护盾"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "闪电一指[1]",
        "tooltip": "获得[闪电链]技能，伤害受[闪电链]技能树影响，但电元素施放的[闪电链]始终只会攻击敌人且无法弹射"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "电力运输[1]",
        "tooltip": "召唤者施放的[闪电链]获得额外弹射次数，等于当前己方电元素的数量"
      }
    ]
  },
  {
    "id": "130",
    "mainArea": {
      "icon": "skill/BTNs130.png",
      "name": "极地战士",
      "description": "拥有可以适应极地的超强体质，生命回复增加"
    },
    "dataArea": [
      "生命回复：10/15/20",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill14.png",
        "text": "巨魔之心[3]",
        "tooltip": "生命回复提高[10/20/30]%"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "巨魔之力[2]",
        "tooltip": "力量加[10/20]，灵巧减[5/10]"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "坚韧[2]",
        "tooltip": "每失去[4/2]%生命，受到的伤害减免[1]%"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "抗寒[2]",
        "tooltip": "被冰冷时间↓[50/100]%"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "压制[2]",
        "tooltip": "减益加成加[20/40]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "漫游者[1]",
        "tooltip": "移动速度提高[10]%"
      }
    ]
  },
  {
    "id": "230",
    "mainArea": {
      "icon": "skill/BTNFrostBolt.png",
      "name": "冰刺",
      "description": "迅速指定一片区域，随后数个冰弹依次砸向范围内随机位置，对敌人造成元素伤害"
    },
    "dataArea": [
      "基础冷却：6",
      "影响半径：250",
      "法术比例：80%/100%/120%",
      "冰弹数量：4",
      "伤害半径：150",
      "",
      "施放距离：800",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill23.png",
        "text": "冰冷爆裂[2]",
        "tooltip": "有[25/50]%概率施加冰冷，持续[3]秒"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "连珠弹体[3]",
        "tooltip": "冰弹数量加[1/2/3]"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "爪击[3]",
        "tooltip": "法力消耗加[10/20/30]，冰弹有[20/40/60]%几率造成额外[100]%攻击比例的元素伤害并附带攻击特效"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "火力压制[1]",
        "tooltip": "击中敌人时，你的命中每高于该敌人的命中[3]点，法术比例增加[1]%"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "暴力装填[2]",
        "tooltip": "冰弹暴击时，返还[0.1/0.2]秒冷却时间，每颗冰弹只能触发一次"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "大冰球[1]",
        "tooltip": "伤害半径翻倍，冰冷概率翻倍，爪击概率翻倍，法术伤害提高[30]%，但数量只有三分之一向下取整"
      }
    ]
  },
  {
    "id": "330",
    "mainArea": {
      "icon": "skill/BTNFreezingBreath.png",
      "name": "冰霜新星",
      "description": "在自己周围生成一阵冰霜新星，冻结周围的敌人并对它们造成元素伤害"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：300",
      "法术比例：150%/200%/250%",
      "持续时间：2",
      "",
      "",
      "",
      "法力消耗：60"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill34.png",
        "text": "法力凝结[3]",
        "tooltip": "法力消耗加[10/20/30]，持续时间加[1/2/3]秒"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "冰冷加深[1]",
        "tooltip": "清除敌人身上的冰冷效果，每层冰冷使冻结持续时间加[1]秒"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "弱点洞悉[3]",
        "tooltip": "你和你的召唤物对冻结敌人造成的伤害提高[10/20/30]%"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "杀意新星[2]",
        "tooltip": "基础冷却减[1/2]秒，影响半径减[50/100]，伤害比例加[75/150]%"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "扩散[2]",
        "tooltip": "影响半径加[100/200]，但敌人距离越远受到伤害越低，最远处仅有一半伤害"
      },
      {
        "icon": "skill/miniskill12.png",
        "text": "伤口凝结[1]",
        "tooltip": "清除自身的持续伤害效果"
      }
    ]
  },
  {
    "id": "430",
    "mainArea": {
      "icon": "skill/BTNSummonWaterElemental.png",
      "name": "水元素",
      "description": "召唤一个水元素为你作战，水元素为远程单位射程为[600]，没有持续时间，攻击造成元素伤害"
    },
    "dataArea": [
      "基础冷却：15",
      "数量上限：2",
      "基础生命：400/600/800",
      "",
      "",
      "基础攻击和法强：80",
      "",
      "",
      "法力消耗：60"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill01.png",
        "text": "致命水流[2]",
        "tooltip": "基础攻击加[30/60]，暴击加[15/30]"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "奥术水流[2]",
        "tooltip": "基础法强加[30/60]，命中加[30/60]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "狂躁波浪[3]",
        "tooltip": "移动速度加[30/60/90]，攻击速度加[20/40/60]，闪避减[10/20/30]"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "能量献祭[2]",
        "tooltip": "最大数量加[1/2]，但你的法力上限减[100/200]"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "冷流[2]",
        "tooltip": "水元素攻击会触发霜冻攻击，受[霜冻攻击]技能树影响，但概率只有原技能的[20/40]%"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "活跃[1]",
        "tooltip": "水元素攻击时会对自己使用一次活力源泉，生命回复部分受[活力源泉]技能树影响"
      }
    ]
  },
  {
    "id": "140",
    "mainArea": {
      "icon": "skill/BTNWhirlwind.png",
      "name": "旋风斩",
      "description": "开启后不断旋转挥舞剑刃，对周围敌人不断造成物理伤害并有概率对最近的那个施加攻击特效，每次造成伤害时也会消耗法力，攻击速度和技能急速均能影响间隔时间，再次释放停止旋转（旋转时无法普攻，无法引导，无法突进，控制无法打断旋风斩）"
    },
    "dataArea": [
      "基础冷却：2",
      "影响半径：200",
      "攻击比例：30%/36%/42%",
      "伤害间隔：1.2",
      "攻速急速加成效果：50%",
      "攻击特效概率：50%",
      "",
      "法力消耗：10"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill18.png",
        "text": "专精[2]",
        "tooltip": "只受攻速和急速其中一个影响，但加成效果提高到[100]%，此节点[1]级时为攻速，[2]级时为急速"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "双刀[1]",
        "tooltip": "对范围内最远的敌人也有相同概率施加攻击特效，若范围内只有一个敌人，攻击特效概率和攻击比例加[22]%"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "刃墙[3]",
        "tooltip": "旋转时所有抗性加[10/20/30]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "迅步[2]",
        "tooltip": "旋转时移动速度加[20/40]，闪避加[10/20]"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "疾风[2]",
        "tooltip": "每[6/3]点额外移动速度，提高旋风斩[1]点暴击伤害"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "乱舞[2]",
        "tooltip": "法力值高于[50]%时，法力消耗加[5/10]，攻击比例加[12/24]%，伤害范围加[50/100]"
      }
    ]
  },
  {
    "id": "240",
    "mainArea": {
      "icon": "skill/BTNs240.png",
      "name": "幻影剑舞",
      "description": "立即突进到范围内随机一个敌人身后并发动一次攻击造成物理伤害，随后不断重复数次"
    },
    "dataArea": [
      "基础冷却：16",
      "影响半径：500",
      "攻击比例：100%/125%/150%",
      "伤害间隔：0.3",
      "攻击次数：6",
      "",
      "",
      "法力消耗：100"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill15.png",
        "text": "跃迁[3]",
        "tooltip": "影响半径加[100/200/300]"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "冲击[2]",
        "tooltip": "突进的距离每有[10/5]点，该次打击攻击比例加[1]%"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "神速[2]",
        "tooltip": "攻击次数加[1/2]，伤害间隔减[0.05/0.10]秒"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "无限[3]",
        "tooltip": "基础冷却减[3/6/9]秒，攻击次数减[1/2/3]次"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "金蝉脱壳[1]",
        "tooltip": "使用此技能后会清除所有负面状态"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "普通攻击[1]",
        "tooltip": "攻击比例减[50]%，可以触发攻击特效"
      }
    ]
  },
  {
    "id": "340",
    "mainArea": {
      "icon": "skill/BTNFeedBack.png",
      "name": "虚无之刃",
      "description": "被动提高攻击距离和攻击速度"
    },
    "dataArea": [
      "攻击距离：200",
      "攻击速度：10/20/30",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill15.png",
        "text": "念力[1]",
        "tooltip": "每有[1]点智力，攻击距离加[1]"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "虚空之手[2]",
        "tooltip": "普攻有[15/30]%概率击晕敌人[1]秒，并将目标向外推出[200]距离，但不会超出你的攻击范围"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "看破[3]",
        "tooltip": "物理穿透加[10/20/30]"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "飘渺之刃[2]",
        "tooltip": "普攻的攻击比例减[10/20]%，攻击速度加[25/50]"
      },
      {
        "icon": "skill/miniskill12.png",
        "text": "能量汲取[2]",
        "tooltip": "当你的生命百分比高于法力百分比时，普攻会消耗[1/2]%的生命，回复[2/4]%的法力"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "能量倾泻[2]",
        "tooltip": "当你的法力百分比高于生命百分比时，普攻会消耗[1/2]%的法力，回复[2/4]%的生命"
      }
    ]
  },
  {
    "id": "440",
    "mainArea": {
      "icon": "skill/BTNHuntress.png",
      "name": "女猎手",
      "description": "召唤一名女猎手为你作战，女猎手为远程单位射程为[600]，没有持续时间，攻击造成物理伤害，攻击可以弹射，弹射距离最远为[300]（请勿在单局游戏内过多次增减该技能的节点，会使部分加成失效）"
    },
    "dataArea": [
      "基础冷却：15",
      "数量上限：2",
      "基础生命：400",
      "",
      "",
      "基础攻击和法强：60/80/100",
      "弹射次数：1",
      "伤害衰减：60%",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill35.png",
        "text": "猎手训练[2]",
        "tooltip": "生命加[100/200]，数量上限加[0/1]"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "随缘弹射[2]",
        "tooltip": "命中减[10/20]，弹射次数加[1/2]"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "持久动力[2]",
        "tooltip": "伤害衰减减[20/40]%"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "冲锋陷阵[3]",
        "tooltip": "攻击距离减[100/200/300]，攻击速度加[30/60/90]"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "全副武装[2]",
        "tooltip": "所有抗性加[20/40]"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "持盾骑兵[1]",
        "tooltip": "可以使用[格挡]技能，概率和减伤效果受[格挡]技能树影响，女猎手视为持有一面盾牌"
      }
    ]
  },
  {
    "id": "150",
    "mainArea": {
      "icon": "skill/BTNHeal.png",
      "name": "回春术",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "250",
    "mainArea": {
      "icon": "skill/BTNTransmute.png",
      "name": "圣光之手",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "350",
    "mainArea": {
      "icon": "skill/BTNHolyBolt.png",
      "name": "圣光术",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "450",
    "mainArea": {
      "icon": "skill/BTNHealingWave.png",
      "name": "治疗波",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "160",
    "mainArea": {
      "icon": "skill/BTNHowlOfTerror.png",
      "name": "恐怖嚎叫",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "260",
    "mainArea": {
      "icon": "skill/BTNRegenerationAura.png",
      "name": "暗影突袭",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "360",
    "mainArea": {
      "icon": "skill/BTNDevourMagic.png",
      "name": "吸魂术",
      "description": "此技能正在开发中，敬请期待"
    }
  },
  {
    "id": "460",
    "mainArea": {
      "icon": "skill/BTNLament.png",
      "name": "鬼影重重",
      "description": "此技能正在开发中，敬请期待"
    }
  }
];

    // 内置的通用JSON数据
    const generalData = [
  {
    "id": "000",
    "mainArea": {
      "icon": "skill/BTNPhilosophersStone.png",
      "name": "生命强化",
      "description": "获得额外的生命值"
    },
    "dataArea": [
      "生命值：100/200/300",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill12.png",
        "text": "战斗补给[2]",
        "tooltip": "获得[5/10]生命回复"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "强效治疗[2]",
        "tooltip": "获得[10/20]治疗强度"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "强化护盾[2]",
        "tooltip": "获得[10/20]护盾强度"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "物理抵抗[2]",
        "tooltip": "获得[10/20]物理抗性"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "元素抵抗[2]",
        "tooltip": "获得[10/20]元素抗性"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "神秘抵抗[2]",
        "tooltip": "获得[10/20]神秘抗性"
      }
    ]
  },
  {
    "id": "990",
    "mainArea": {
      "icon": "skill/BTNEngineeringUpgrade.png",
      "name": "属性附加",
      "description": "获得额外的全属性（无需装配该技能也能拥有节点中的装备使用权限，但没有属性加成，当依靠此技能双持时无法取消相关节点）"
    },
    "dataArea": [
      "全属性：2/4/6",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill02.png",
        "text": "支配战锤[2]",
        "tooltip": "获得[4/8]力量，可以装备两把锤子"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "支配战斧[2]",
        "tooltip": "获得[3/6]力量和灵巧，可以装备两把斧子"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "支配利刃[2]",
        "tooltip": "获得[4/8]灵巧，可以装备两把剑"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "匕首精通[2]",
        "tooltip": "获得[3/6]灵巧和智力，可以装备两把匕首"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "支配法杖[2]",
        "tooltip": "获得[4/8]智力，可以装备两支法杖"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "法器精通[2]",
        "tooltip": "获得[3/6]智力和统御，可以装备两个法器"
      }
    ]
  }
];

    // 创建表格HTML
    let tableHTML = `
        <p>欢迎来到${quality}资料库！</p>
        <p>${quality}分为专精技能和通用技能，专精技能由属性和职业组合决定：</p>
        <p>点击英雄的头像跳转到它对应的专精技能：</p>
        <div class="mastery-container">
    `;
    
    // 生成专精部分
    tableHTML += `<h3 class="mastery-table-title mastery-title">专精</h3>`;
    
    // 生成角色表格
    tableHTML += `
    <table class="character-table">
        <tr>
            <th>属性/职业</th>
            <th style="background-color: #dc2626; color: white;">火焰</th>
            <th style="background-color: #16a34a; color: white;">风暴</th>
            <th style="background-color: #2563eb; color: white;">冰冷</th>
            <th style="background-color: #ea580c; color: white;">战斗</th>
            <th style="background-color: #fbbf24; color: white;">圣光</th>
            <th style="background-color: #7c3aed; color: white;">暗影</th>
        </tr>
        <tr>
            <th style="background-color: #dc2626; color: white;">力量</th>
`;
    
    // 生成力量行
    for (let i = 1; i <= 6; i++) {
    const skillId = `1${i}0`;
    const character = characterSkillMap[skillId];
    const skill = masteryData.find(s => s.id === skillId);
    
    tableHTML += `
        <td class="character-cell strength-cell" data-skill-id="${skillId}">
            <div class="character-content">
                <div class="character-head-icon">
                    <img src="${character.headIcon}" alt="${character.name}头像">
                </div>
                <div class="character-name">${character.name}</div>
            </div>
            <div class="character-tooltip">
                <div class="tooltip-content">  <!-- 改为正确的类名 -->
                <div class="tooltip-icon">  <!-- 改为正确的类名 -->
                    <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                </div>
                <div class="tooltip-text">${skill.mainArea.name}</div>  <!-- 改为正确的类名 -->
                </div>
            </div>
        </td>
    `;
    }
    
    tableHTML += `</tr><tr><th style="background-color: #fbbf24; color: white;">灵巧</th>`;
    
    // 生成灵巧行
    for (let i = 1; i <= 6; i++) {
    const skillId = `2${i}0`;
    const character = characterSkillMap[skillId];
    const skill = masteryData.find(s => s.id === skillId);
    
    tableHTML += `
        <td class="character-cell strength-cell" data-skill-id="${skillId}">
            <div class="character-content">
                <div class="character-head-icon">
                    <img src="${character.headIcon}" alt="${character.name}头像">
                </div>
                <div class="character-name">${character.name}</div>
            </div>
            <div class="character-tooltip">
                <div class="tooltip-content">  <!-- 改为正确的类名 -->
                <div class="tooltip-icon">  <!-- 改为正确的类名 -->
                    <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                </div>
                <div class="tooltip-text">${skill.mainArea.name}</div>  <!-- 改为正确的类名 -->
                </div>
            </div>
        </td>
    `;
    }
    
    tableHTML += `</tr><tr><th style="background-color: #2563eb; color: white;">智力</th>`;
    
    // 生成智力行
    for (let i = 1; i <= 6; i++) {
    const skillId = `3${i}0`;
    const character = characterSkillMap[skillId];
    const skill = masteryData.find(s => s.id === skillId);
    
    tableHTML += `
        <td class="character-cell strength-cell" data-skill-id="${skillId}">
            <div class="character-content">
                <div class="character-head-icon">
                    <img src="${character.headIcon}" alt="${character.name}头像">
                </div>
                <div class="character-name">${character.name}</div>
            </div>
            <div class="character-tooltip">
                <div class="tooltip-content">  <!-- 改为正确的类名 -->
                <div class="tooltip-icon">  <!-- 改为正确的类名 -->
                    <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                </div>
                <div class="tooltip-text">${skill.mainArea.name}</div>  <!-- 改为正确的类名 -->
                </div>
            </div>
        </td>
    `;
    }
    
    tableHTML += `</tr><tr><th style="background-color: #16a34a; color: white;">统御</th>`;
    
    // 生成统御行
    for (let i = 1; i <= 6; i++) {
    const skillId = `4${i}0`;
    const character = characterSkillMap[skillId];
    const skill = masteryData.find(s => s.id === skillId);
    
    tableHTML += `
        <td class="character-cell strength-cell" data-skill-id="${skillId}">
            <div class="character-content">
                <div class="character-head-icon">
                    <img src="${character.headIcon}" alt="${character.name}头像">
                </div>
                <div class="character-name">${character.name}</div>
            </div>
            <div class="character-tooltip">
                <div class="tooltip-content">  <!-- 改为正确的类名 -->
                <div class="tooltip-icon">  <!-- 改为正确的类名 -->
                    <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                </div>
                <div class="tooltip-text">${skill.mainArea.name}</div>  <!-- 改为正确的类名 -->
                </div>
            </div>
        </td>
    `;
    }
    
    tableHTML += `</tr></table>`;
    
    // 生成专精技能表格
    masteryData.forEach((skill, index) => {
        // 如果技能数据为空，跳过
        if (!skill.mainArea) return;
        
        tableHTML += `
            <table class="mastery-table mastery-skill" id="skill-${skill.id}">
                <!-- 第一行 - 主区域 -->
                <tr class="main-area-row">
                    <!-- 第1-2列合并为图标格 -->
                    <td colspan="2">
                        <div class="skill-icon">
                            <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                        </div>
                    </td>
                    <!-- 第3-4列合并为名称格 -->
                    <td colspan="2" style="font-size: 24px; font-weight: bold;">${skill.mainArea.name}</td>
                    <!-- 第5-24列合并为描述格 -->
                    <td colspan="20">${skill.mainArea.description}</td>
                </tr>
                
                <!-- 第二行 - 数据区域 -->
                <tr class="data-area-row">
        `;
        
        // 生成8个数据单元格，每3列合并为1个
        for (let i = 0; i < 8; i++) {
            const data = skill.dataArea && skill.dataArea[i] ? skill.dataArea[i] : '';
            tableHTML += `<td colspan="3">${data}</td>`;
        }
        
        tableHTML += `</tr>`;
        
        // 第三行 - 进阶区域
        tableHTML += `<tr class="advancement-area-row">`;
        
        // 生成6个进阶单元格，每4列合并为1个
        for (let i = 0; i < 6; i++) {
            const advancement = skill.advancementArea && skill.advancementArea[i] ? skill.advancementArea[i] : {};
            
            tableHTML += `
                <td colspan="4">
                    <div class="advancement-cell">
                        ${advancement.icon ? `
                            <div class="advancement-icon">
                                <img src="${advancement.icon}" alt="${advancement.text}图标">
                            </div>
                        ` : ''}
                        
                        ${advancement.text ? `
                            <div class="advancement-text">${advancement.text}</div>
                        ` : ''}
                    </div>
                    
                    ${advancement.tooltip ? `
                        <div class="advancement-tooltip">
                            ${advancement.tooltip}
                        </div>
                    ` : ''}
                </td>
            `;
        }
        
        tableHTML += `</tr></table>`;
    });
    
    // 生成通用部分
    tableHTML += `<h3 class="mastery-table-title general-title">通用</h3>`;
    
    // 生成通用技能表格
    generalData.forEach((skill, index) => {
        // 如果技能数据为空，跳过
        if (!skill.mainArea) return;
        
        tableHTML += `
            <table class="mastery-table general-skill" id="skill-${skill.id}">
                <!-- 第一行 - 主区域 -->
                <tr class="main-area-row">
                    <!-- 第1-2列合并为图标格 -->
                    <td colspan="2">
                        <div class="skill-icon">
                            <img src="${skill.mainArea.icon}" alt="${skill.mainArea.name}图标">
                        </div>
                    </td>
                    <!-- 第3-4列合并为名称格 -->
                    <td colspan="2" style="font-size: 24px; font-weight: bold;">${skill.mainArea.name}</td>
                    <!-- 第5-24列合并为描述格 -->
                    <td colspan="20">${skill.mainArea.description}</td>
                </tr>
                
                <!-- 第二行 - 数据区域 -->
                <tr class="data-area-row">
        `;
        
        // 生成8个数据单元格，每3列合并为1个
        for (let i = 0; i < 8; i++) {
            const data = skill.dataArea && skill.dataArea[i] ? skill.dataArea[i] : '';
            tableHTML += `<td colspan="3">${data}</td>`;
        }
        
        tableHTML += `</tr>`;
        
        // 第三行 - 进阶区域
        tableHTML += `<tr class="advancement-area-row">`;
        
        // 生成6个进阶单元格，每4列合并为1个
        for (let i = 0; i < 6; i++) {
            const advancement = skill.advancementArea && skill.advancementArea[i] ? skill.advancementArea[i] : {};
            
            tableHTML += `
                <td colspan="4">
                    <div class="advancement-cell">
                        ${advancement.icon ? `
                            <div class="advancement-icon">
                                <img src="${advancement.icon}" alt="${advancement.text}图标">
                            </div>
                        ` : ''}
                        
                        ${advancement.text ? `
                            <div class="advancement-text">${advancement.text}</div>
                        ` : ''}
                    </div>
                    
                    ${advancement.tooltip ? `
                        <div class="advancement-tooltip">
                            ${advancement.tooltip}
                        </div>
                    ` : ''}
                </td>
            `;
        }
        
        tableHTML += `</tr></table>`;
    });
    
    tableHTML += `</div>`;
    
    contentBody.innerHTML = tableHTML;
    
    // 添加角色表格点击事件
    addCharacterTableEvents();
    
    // 添加单元格编辑功能示例
    addCellEditFunctionality('mastery');
}

// 添加角色表格点击事件
function addCharacterTableEvents() {
    const characterCells = document.querySelectorAll('.character-cell');
    
    characterCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const skillId = this.getAttribute('data-skill-id');
            const targetElement = document.getElementById(`skill-${skillId}`);
            
            if (targetElement) {
                // 平滑滚动到目标元素，使其位于屏幕中间
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'  // 关键修改：将block从'start'改为'center'
                });
                
                // 添加高亮效果
                targetElement.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.5)';
                setTimeout(() => {
                    targetElement.style.boxShadow = '';
                }, 2000);
            }
        });
    });
}

// 单元格编辑功能（如果需要）
function addCellEditFunctionality(type) {
    // 这里可以添加单元格编辑功能
    console.log(`为${type}表格添加编辑功能`);
}