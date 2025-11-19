// 职业表格生成函数
function displayProfessionSkillsTable(contentBody, quality, color) {
    // 内置的职业JSON数据
    const professionData = {
        // 火焰职业数据
        fire: [
  {
    "mainArea": {
      "icon": "skill/BTNWallOfFire.png",
      "name": "烈焰风暴",
      "description": "在两秒延迟后燃起烈焰风暴对目标区域内敌人持续造成元素伤害，结束后留下余烬造成少量持续伤害（此技能无法闪避/属于DOT伤害）"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：250",
      "燃烧每秒比例：100%/120%/140%",
      "燃烧时间：2",
      "余烬每秒比例：50%/60%/70%",
      "余烬时间：4",
      "施放距离：800",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill02.png",
        "text": "速燃[2]",
        "tooltip": "燃烧时间加[1/2]秒，燃烧延迟减[1/2]秒，余烬时间减[2/4]秒"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "爆燃[2]",
        "tooltip": "允许烈焰风暴暴击且暴击加[10/20]"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "集中火力[2]",
        "tooltip": "影响半径减[50/100]，燃烧法术比例加[40/80]%，余烬法术比例加[20/40]%"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "恒温[1]",
        "tooltip": "法力消耗减[30]，不再有燃烧阶段和技能延迟，直接生成余烬"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "炙烤[3]",
        "tooltip": "余烬时间加[2/4/6]秒"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "小火苗[2]",
        "tooltip": "基础冷却减[2/4]秒，但燃烧延迟加[0.5/1]秒"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNBloodLust.png",
      "name": "狂热",
      "description": "普攻后会获得狂热效果，增加攻击速度，但减少闪避，再次攻击会叠加一层并刷新持续时间"
    },
    "dataArea": [
      "每层攻速加成：2/4/6",
      "每层闪避减少：3",
      "",
      "持续时间：6",
      "最大层数：6",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill09.png",
        "text": "红温[2]",
        "tooltip": "每层加[5/10]暴击伤害，但减[1/2]命中"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "余温[1]",
        "tooltip": "持续时间加[2]秒"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "好战[2]",
        "tooltip": "最大层数加[2/4]，但持续时间减[1/2]秒"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "能量溢出[3]",
        "tooltip": "达到层数上限后触发，还会获得[20/40/60]护盾"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "狂躁法术[3]",
        "tooltip": "每层加[2/4/6]技能急速，但现在普攻无法触发，改为使用技能触发"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "混沌[1]",
        "tooltip": "无论是否学习狂躁法术节点，此节点都会使普攻和技能均能触发"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNFireForTheCannon.png",
      "name": "火球术",
      "description": "向指定方向发射一枚火球，与敌人碰撞后爆炸，在小范围内造成元素伤害"
    },
    "dataArea": [
      "基础冷却：4",
      "影响半径：150",
      "法术比例：100%/120%/140%",
      "飞行距离：800",
      "",
      "",
      "施放距离：1000",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "快速引燃[2]",
        "tooltip": "法力消耗减[5/10]，飞行距离减[50/100]"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "小火[1]",
        "tooltip": "基础冷却减[1]秒，法术比例减[20]%"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "聚焦[3]",
        "tooltip": "法术比例减[20/40/60]%，但首次碰撞对主要目标造成额外[50/100/150]%比例的伤害"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "火焰散播[2]",
        "tooltip": "影响半径加[50/100]"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "爆破[1]",
        "tooltip": "初次爆炸范围内每有一个敌人，都会增加[10]%概率引发第二次爆炸"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "狂暴能量[3]",
        "tooltip": "暴击几率加[10/20/30]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNFireRocks.png",
      "name": "陨石",
      "description": "召唤一枚陨石向目标区域落下，对被砸中的敌人造成大量伤害和昏迷，物理和元素各占一半伤害"
    },
    "dataArea": [
      "基础冷却：15",
      "影响半径：300",
      "法术比例：200%/250%/300%",
      "昏迷时间：2",
      "",
      "",
      "施放距离：1000",
      "法力消耗：60"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill02.png",
        "text": "毁灭[3]",
        "tooltip": "敌人越靠近中心受到伤害越高，对最中心敌人法术比例加[100/200/300]%"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "冲击波[2]",
        "tooltip": "影响半径加[50/100]，昏迷时间加[0.5/1.0]秒"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "虚化[2]",
        "tooltip": "物理伤害占比降低[20/40]%，昏迷时间减[0.5/1.0]秒"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "魔力[2]",
        "tooltip": "法力消耗减[10/20]"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "暗星[1]",
        "tooltip": "从虚空召唤陨石，陨石的元素伤害部分变为神秘伤害"
      },
      {
        "icon": "skill/miniskill13.png",
        "text": "双子[2]",
        "tooltip": "主动施放陨石时有[20/40]%概率召唤一对螺旋下降的陨石，造成双倍伤害"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNFire.png",
      "name": "流星雨",
      "description": "每过一段时间自动锁定周围随机的一个敌人，落下流星对其造成元素伤害"
    },
    "dataArea": [
      "基础间隔：1.0",
      "影响半径：600",
      "法术比例：50%/60%/70%",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill01.png",
        "text": "空袭[3]",
        "tooltip": "基础间隔加[0.1/0.2/0.3]，法术比例加[20/40/60]%"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "急落[3]",
        "tooltip": "基础间隔减[0.1/0.2/0.3]，影响半径减[100/200/300]"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "飘忽[2]",
        "tooltip": "影响半径加[200/400]"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "预言[1]",
        "tooltip": "主动使用技能时会触发一次流星"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "奥术流星[2]",
        "tooltip": "流星变为奥术流星，造成神秘伤害，并无视[10/20]神秘抗性"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "巨石[1]",
        "tooltip": "流星有[10]%概率变为陨石，此效果受[陨石]技能树影响并消耗陨石一半的法力，法力不足时无法触发"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNImmolationOn.png",
      "name": "献祭",
      "description": "开启后不断燃烧，对周围敌人造成元素伤害，每次燃烧都会消耗法力值，再次释放关闭献祭"
    },
    "dataArea": [
      "基础冷却：4",
      "影响半径：150",
      "法术比例：50%/60%/70%",
      "基础间隔：1.0",
      "",
      "",
      "",
      "法力消耗：10"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill16.png",
        "text": "血祭[1]",
        "tooltip": "若生命高于[50]%，触发会消耗[2]%生命，每消耗一点生命加[1]%法术比例"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "控温[2]",
        "tooltip": "法力消耗减[3/6]"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "蓄势[2]",
        "tooltip": "影响半径加[50/100]，基础间隔加[0.1/0.2]秒"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "潜能激发[1]",
        "tooltip": "基础间隔加[0.2]秒，献祭的间隔时间受到技能急速影响"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "走火入魔[3]",
        "tooltip": "开启时所有元素伤害加成加[10/20/30]，但是元素抗性减[10/20/30]"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "火焰披风[3]",
        "tooltip": "开启时获得[10/20/30]闪避和移动速度"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNMarkOfFire.png",
      "name": "凤凰",
      "description": "召唤一只火凤凰为你作战，火凤凰为远程飞行单位，没有持续时间，攻击造成元素伤害，初始属性拥有额外的元素伤害加成"
    },
    "dataArea": [
      "基础冷却：20",
      "数量上限：1",
      "基础生命：600",
      "",
      "",
      "基础攻击和法强：120/160/200",
      "元素伤害加成：60/80/100",
      "",
      "法力消耗：100"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill14.png",
        "text": "烈焰之心[2]",
        "tooltip": "凤凰基础生命加[300/600]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "火焰之翼[2]",
        "tooltip": "移动速度加[50/100]"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "喷吐[1]",
        "tooltip": "获得[火球术]技能，对周围敌人自动释放，受[火球术]技能树影响，但冷却时间为原本的[200]%"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "火焰气息[3]",
        "tooltip": "[火球术]技能冷却时间减少为原本的[160/120/80]%"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "火苗[1]",
        "tooltip": "获得[烈焰风暴]技能，对周围敌人自动释放，受[烈焰风暴]技能树影响，但冷却时间为原本的[200]%"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "烈火燎原[3]",
        "tooltip": "[烈焰风暴]技能冷却时间减少为原本的[160/120/80]%"
      }
    ]
  }
],
        
        // 风暴职业数据
        storm: [
  {
    "mainArea": {
      "icon": "skill/BTNChainLightning.png",
      "name": "闪电链",
      "description": "释放一股跳动的闪电在敌人之间传导，造成元素伤害，每传导一次基础伤害值都会衰减，数值为初始伤害的一定比例（默认时无法对相同目标再次弹跳）"
    },
    "dataArea": [
      "基础冷却：8",
      "",
      "法术比例：200%/240%/280%",
      "弹跳距离：600",
      "弹跳次数：4",
      "伤害衰减：10%",
      "施放距离：600",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill22.png",
        "text": "活跃[3]",
        "tooltip": "弹跳次数提高[1/2/3]"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "强流[2]",
        "tooltip": "法力消耗加[10/20]，伤害不会衰减，且每次提高[0/10]%"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "无线[2]",
        "tooltip": "施放距离加[200/400]，弹跳距离加[200/400]"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "电击[1]",
        "tooltip": "法力消耗加[10]，被击中的敌人会受到[1]秒昏迷"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "充能[3]",
        "tooltip": "可以弹跳到友方，使其获得[100]护盾，向友方弹跳的偏好：[30/60/90]%"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "连锁[1]",
        "tooltip": "基础冷却加[4]秒，可以弹跳到之前击中过的目标"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNPurge.png",
      "name": "净化",
      "description": "用强力的电流麻痹敌人，造成少量元素伤害，使其速度大幅降低并失去正面状态"
    },
    "dataArea": [
      "基础冷却：10",
      "速度降低：60%",
      "法术比例：200%/300%/400%",
      "持续时间：2",
      "",
      "",
      "施放距离：600",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill28.png",
        "text": "快速电疗[2]",
        "tooltip": "基础冷却减[2/4]秒，减速效果减[20/40]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "微弱电流[2]",
        "tooltip": "法力消耗减[15/30]，法术比例减[50/100]%"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "神志不清[3]",
        "tooltip": "持续时间加[1/2/3]秒"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "远距传导[3]",
        "tooltip": "施放距离加[200/400/600]"
      },
      {
        "icon": "skill/miniskill18.png",
        "text": "自我净化[1]",
        "tooltip": "法力消耗加[30]，可以为施法者去除负面状态"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "强力打击[1]",
        "tooltip": "法术比例加[200]%，无法清除目标的正面状态"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs023.png",
      "name": "小旋风",
      "description": "在身边创造一阵活跃的旋风，它会追击最近的敌人并不断造成范围物理伤害，如果没有合适的敌人则会跟着你"
    },
    "dataArea": [
      "基础冷却：6",
      "影响半径：150",
      "法术比例：50%/60%/70%",
      "持续时间：10",
      "伤害间隔：1.0",
      "追击范围：800",
      "",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill25.png",
        "text": "双生[2]",
        "tooltip": "主动使用此技能时，有[25/50]%概率召唤两道旋风，但第二道会消耗双倍法力"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "小小旋风[2]",
        "tooltip": "法力消耗减[5/10]，追击范围减[100/200]"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "愈演愈烈[2]",
        "tooltip": "影响半径减[30/60]，但每过[1]秒影响半径加[10/20]"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "流光旋涡[2]",
        "tooltip": "转化为神秘伤害，小旋风的持续时间受增益加成的影响，但影响只有[50/100]%"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "寒冬气息[2]",
        "tooltip": "若没有学习流光旋涡节点，小旋风转化为元素伤害，并有[10/20]%概率冻结周围敌人[2]秒"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "猩红风暴[2]",
        "tooltip": "若没有学习流光旋涡和寒冬气息节点，小旋风会追击范围内生命百分比最低的敌人，且敌人每损失[4]%生命，法术比例就会加[1/2]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs024.png",
      "name": "闪电风暴",
      "description": "开始引导，在目标区域不断召唤随机落下的闪电，击晕一小片范围的敌人并对它们造成元素伤害，每次召唤闪电都会消耗法力（引导技能会被命令/控制或者法力不足中断，没有引导时间的技能若不被中断将一直持续很长时间）"
    },
    "dataArea": [
      "基础冷却：2",
      "影响半径：400",
      "法术比例：20%/25%/30%",
      "昏迷时间：1.0",
      "闪电间隔：0.1",
      "伤害半径：125",
      "施放距离：400",
      "法力消耗：5"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill21.png",
        "text": "低压[2]",
        "tooltip": "法力消耗减[1/2]，昏迷持续时间减[0.5/1.0]秒"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "雨露均沾[3]",
        "tooltip": "影响半径加[50/100/150]，伤害半径加[25/50/75]"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "瞄准[2]",
        "tooltip": "影响半径减[75/150]，伤害间隔加[0.01/0.02]秒"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "先知[3]",
        "tooltip": "施放距离加[200/400/600]"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "死神降临[1]",
        "tooltip": "可以召唤法力消耗和法术比例翻倍的死神闪电，概率为当前法力百分比的一半"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "陷阵之志[1]",
        "tooltip": "技能变为没有目标，闪电会在你的周围召唤，此时闪电无法被闪避"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs025.png",
      "name": "冲锋",
      "description": "带着风暴向目标方向冲刺，并攻击途经敌人对它们造成伤害，一半物理一半元素（冲锋无法穿过障碍物）"
    },
    "dataArea": [
      "基础冷却：8",
      "影响半径：150",
      "攻击比例：200%/250%/300%",
      "",
      "",
      "",
      "施放距离：1000",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill04.png",
        "text": "狂风之力[2]",
        "tooltip": "影响半径加[25/50]，伤害全部为物理伤害"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "闪电穿梭[2]",
        "tooltip": "若没有学习狂风之力节点，冲刺距离加[100/200]，伤害全部为元素伤害"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "无法选中[2]",
        "tooltip": "冲锋途中，获得[100/200]闪避"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "流动风墙[2]",
        "tooltip": "冲锋后，获得[100/200]护盾"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "致命冲锋[2]",
        "tooltip": "每有[2/1]点额外移速(基础移速300)，使冲锋的攻击比例加[1]%"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "快速冲击[2]",
        "tooltip": "基础冷却减[1/2]秒，攻击比例减[50/100]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNLightningShield.png",
      "name": "风暴之盾",
      "description": "召唤充满电力的风暴护盾环绕在周围保护你，立即获得大量护盾值，并在一定持续时间内不断向周围敌人发射电球造成法术元素伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：600",
      "法术比例：100%/140%/180%",
      "持续时间：6",
      "伤害间隔：2.0",
      "护盾值：100",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill27.png",
        "text": "电刃[2]",
        "tooltip": "拥有闪电之盾时，攻击有[25/50]%概率对目标发射电球"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "洞悉[2]",
        "tooltip": "电球的间隔受技能急速影响，急速的影响效果有[50/100]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "充能[2]",
        "tooltip": "拥有闪电之盾时，法力回复提高[20/40]%"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "狂暴[2]",
        "tooltip": "拥有闪电之盾时，暴击几率加[10/20]"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "高能护盾[2]",
        "tooltip": "法力消耗加[20/40]，获得护盾值加[100/200]"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "盾击[2]",
        "tooltip": "每一个电球都会消耗[5/10]%当前护盾，使其法术比例加[消耗值]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNTornado.png",
      "name": "龙卷风",
      "description": "在目标区域中心创造一阵强力的龙卷风，它会不断对造成物理伤害并有[20]%的概率将敌人卷入中心"
    },
    "dataArea": [
      "基础冷却：20",
      "影响半径：500",
      "法术比例：12%/16%/20%",
      "持续时间：10",
      "伤害间隔：0.2",
      "牵引距离：200",
      "施放距离：800",
      "法力消耗：100"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill33.png",
        "text": "撕裂[1]",
        "tooltip": "敌人离中心越近，受到伤害越高，最中心敌人额外受到[10]%法术比例"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "飓风[1]",
        "tooltip": "敌人离中心越远，受到牵引力越大，最边缘敌人额外受到[200]牵引距离"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "天雷[3]",
        "tooltip": "法力足够时，龙卷风会在自己的影响范围内引发闪电风暴，每道闪电受闪电风暴技能树影响并消耗相应法力，但触发频率为原技能的[200/150/100]%"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "暴风之眼[3]",
        "tooltip": "法力足够时，龙卷风每次伤害间隔都有概率召唤一道小旋风，受小旋风技能树影响并消耗相应法力，召唤概率为[4/7/10]%"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "守护之风[2]",
        "tooltip": "龙卷风每次伤害间隔会为范围内友军提供[2/4]护盾，对自己效果翻倍"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "追随之风[2]",
        "tooltip": "龙卷风会缓慢向你移动，移动速度为[100/200]"
      }
    ]
  }
],
        
        // 冰冷职业数据
        ice: [
  {
    "mainArea": {
      "icon": "skill/BTNFrost.png",
      "name": "霜冻攻击",
      "description": "被动为武器附加冰霜，普攻有概率冻结目标"
    },
    "dataArea": [
      "触发概率：20%/30%/40%",
      "",
      "",
      "持续时间：2",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "冻伤[2]",
        "tooltip": "还会附加[50/100]%法术比例的元素伤害"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "低温脆弱[2]",
        "tooltip": "目标身上的每层冰冷效果都会使概率加[5/10]%"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "降温[3]",
        "tooltip": "还会施加[1/2/3]秒的冰冷效果"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "冰霜强化[1]",
        "tooltip": "你的增益加成的[50]%也会作用于此技能施加的负面状态"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "加速制冷[2]",
        "tooltip": "会随机减少你一项正在冷却的技能[0.5/1.0]秒的剩余冷却时间"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "破冰一击[2]",
        "tooltip": "若学习了[刺骨寒意]节点且目标处于冻结状态，触发概率加[50/100]%，溢出的概率会转为法术比例，但该次攻击不会施加负面状态"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNOrbOfFrost.png",
      "name": "雪球",
      "description": "向目标投掷一颗雪球，对其造成元素伤害，并有概率击昏或冻结目标"
    },
    "dataArea": [
      "基础冷却：8",
      "",
      "攻击比例：200%/250%/300%",
      "持续时间：3",
      "击晕概率：50%",
      "冻结概率：50%",
      "施放距离：600",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill37.png",
        "text": "弹跳[2]",
        "tooltip": "雪球有[25/50]%概率弹射到目标[400]范围内的一个随机敌人"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "溅射[3]",
        "tooltip": "若学习[弹跳]节点，雪球必定弹射，但最多弹射[1/2/3]次，弹射继承一部分的基础攻击比例，继承比值等于[弹跳]节点的弹射概率"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "覆雪石块[1]",
        "tooltip": "雪球变为物理伤害，冻结概率减[50]%，击晕概率加[50]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "凝结冰球[1]",
        "tooltip": "雪球变为法术伤害，所有攻击比例相关加成变为法强相关，击晕概率减[50]%，冻结概率加[50]%"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "集中火力[2]",
        "tooltip": "若目标周围[400]范围没有敌人，击中时返还[20/40]%剩余冷却和[10/20]法力"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "雪上加霜[3]",
        "tooltip": "敌人每有一种负面状态，雪球的比例加[20/40/60]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNFrostArmor.png",
      "name": "冰霜护甲",
      "description": "为目标友军添加一层冰霜护甲，提供物理抗性，它被近战攻击命中时有概率对攻击者施加一层冰冷效果"
    },
    "dataArea": [
      "基础冷却：6",
      "",
      "物理抗性：20%/30%/40%",
      "持续时间：12",
      "冰冷触发概率：20%/30%/40%",
      "冰冷持续时间：3",
      "施放距离：800",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill20.png",
        "text": "元素吸收[2]",
        "tooltip": "冰霜护甲元素抗性加[20/40]"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "棱光反射[2]",
        "tooltip": "冰霜护甲神秘抗性加[20/40]"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "冷链护甲[3]",
        "tooltip": "冰霜护甲持续时间加[4/8/12]秒"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "寒气扩散[1]",
        "tooltip": "远程敌人的攻击也会被施加冰冷，概率为近战敌人的一半"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "冷疗[3]",
        "tooltip": "冰霜护甲还会增加[10/20/30]生命回复"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "军团装甲[1]",
        "tooltip": "基础冷却加[4]秒，若对你的召唤物使用，你控制的所有同类召唤物都会获得效果"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs034.png",
      "name": "活力源泉",
      "description": "每过一段时间，治疗自己并回复一些法力"
    },
    "dataArea": [
      "触发间隔：6.0",
      "",
      "治疗量：20/30/40",
      "法力回复：10/15/20",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill18.png",
        "text": "自疗大师[2]",
        "tooltip": "被动增加[10/20]治疗强度和护盾强度"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "活力护盾[2]",
        "tooltip": "生命已满时，[50/100]%的基础治疗量转化为护盾"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "战意[3]",
        "tooltip": "普攻有[25/50/75]%概率使活力源泉下一次触发快进[1]秒"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "法术热诚[3]",
        "tooltip": "施法会使活力源泉下一次触发快进，时间相当于该技能基础冷却的[10/20/30]%"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "强效活力[1]",
        "tooltip": "活力源泉受技能急速影响，效果为[50]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "法力渴求[1]",
        "tooltip": "每损失[1]%法力，活力源泉的法力回复提高[1]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNGlacier.png",
      "name": "冰爆术",
      "description": "在敌人身上引发一阵冰爆，对其造成元素伤害和冻结效果，目标周围敌人会受到一半伤害和相同时间的冰冷效果"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：200",
      "法术比例：240%/320%/400%",
      "持续时间：2",
      "",
      "",
      "施放距离：600",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "冰霜触摸[2]",
        "tooltip": "施放距离加[100/200]，持续时间加[1/2]秒"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "爆冰一击[3]",
        "tooltip": "基础冷却减[1/2/3]秒，冰爆术不在施加负面状态，且会清除敌人身上的冻结和冰冷效果来提高其受到冰爆术的伤害，清除冻结提高[20/40/60]%，每层冰冷提高[10/20/30]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "低温传递[1]",
        "tooltip": "法力消耗加[30]，但每命中一个敌人返还[20]法力"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "充能爆裂[3]",
        "tooltip": "冰爆术暴击加[10/20/30]，溢出的暴击会转换为暴击伤害"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "飞散冰片[2]",
        "tooltip": "影响半径加[50/100]"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "虚空爆裂[1]",
        "tooltip": "技能变为范围目标，范围内所有敌人只受到冰冷效果，中心的敌人受到全额伤害，向外递减，边缘敌人受到一半伤害"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNCrushingWave.png",
      "name": "冲击波",
      "description": "向目标方向释放冲击波，对途径敌人造成伤害，开始影响范围略小之后逐渐增大，物理伤害和元素伤害各占一半"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：150",
      "法术比例：200%/240%/280%",
      "技能距离：900",
      "",
      "",
      "施放距离：1000",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill07.png",
        "text": "碎裂泥沙[2]",
        "tooltip": "物理伤害占比翻倍，冲击波获得[10/20]物理穿透"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "极地寒流[2]",
        "tooltip": "元素伤害占比翻倍，冲击波施加冰冷状态，持续[2/4]秒"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "扩散[2]",
        "tooltip": "影响半径加[50/100]"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "虹吸[1]",
        "tooltip": "冲击波会将敌人向内牵引一小段距离"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "海啸[2]",
        "tooltip": "基础冷却加[1/2]秒，法术比例加[60/120]%"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "后浪[3]",
        "tooltip": "法力消耗加[10/20/30]，有[30/60/90]%概率在[1]秒后发出一道余波，余波只有伤害且数值为一半"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNBlizzard.png",
      "name": "暴风雪",
      "description": "开始引导，在目标区域持续降下暴风雪，对其中的敌人造成伤害，伤害间隔受技能急速影响"
    },
    "dataArea": [
      "基础冷却：2",
      "影响半径：250",
      "法术比例：50%/60%/70%",
      "",
      "",
      "伤害间隔：1.0",
      "施放距离：800",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill26.png",
        "text": "刺骨[2]",
        "tooltip": "暴风雪会施加刺骨状态，每层刺骨会使敌人受到暴风雪的法术比例加[5/10]%，持续[5]秒，最多叠加[5]层"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "寒腿[2]",
        "tooltip": "每层刺骨会使敌人的移动速度减[10/20]，元素抗性减[1/2]"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "凝固[2]",
        "tooltip": "暴风雪攻击有刺骨状态的敌人时，每层刺骨有[3/6]%概率冻结敌人[3]秒"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "入冬[2]",
        "tooltip": "法力消耗减[5/10]点"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "暴雪[3]",
        "tooltip": "暴风雪的暴击加[5/10/15]，暴击伤害加[10/20/30]"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "漫游之雪[1]",
        "tooltip": "若当前法力高于一半，每秒对释放范围内随机敌人自动落下一片冰雪，这片冰雪消耗原技能[50]%法力且法术比例减[10]%"
      }
    ]
  }
],
        
        // 战斗职业数据
        battle: [
  {
    "mainArea": {
      "icon": "skill/BTNTrueShot.png",
      "name": "强攻",
      "description": "每第三次普攻会增加该次普攻的攻击比例并使目标进入易伤状态，持续时间内受到的伤害增加（属于攻击特效）"
    },
    "dataArea": [
      "",
      "",
      "攻击比例：50%",
      "持续时间：6",
      "受到伤害增加：10%/15%/20%",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill01.png",
        "text": "强击光环[3]",
        "tooltip": "被动提高[5/10/15]%攻击力"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "终结技[2]",
        "tooltip": "目标每损失[2/1]%生命值，攻击比例加[1]%"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "神经刀[1]",
        "tooltip": "强攻变为概率触发，每次普攻触发概率为[40]%"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "压制[2]",
        "tooltip": "易伤状态还会使目标攻击和法强降低[10/20]%"
      },
      {
        "icon": "skill/miniskill17.png",
        "text": "残废[2]",
        "tooltip": "易伤状态还会使目标攻击速度和技能急速降低[15/30]%"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "重伤[2]",
        "tooltip": "易伤状态持续时间加[3/6]秒"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs042.png",
      "name": "渴血一击",
      "description": "对一个敌人发起一次暴力打击，造成物理伤害，该次伤害有额外的攻击吸血"
    },
    "dataArea": [
      "基础冷却：8",
      "",
      "攻击比例：250%/300%/350%",
      "",
      "",
      "攻击吸血：10%",
      "施放距离：100",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill35.png",
        "text": "血怒[2]",
        "tooltip": "你当前生命值每损失[1]%，攻击比例加[1/2]"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "急救[3]",
        "tooltip": "额外回复[10/20/30]%的已损生命值"
      },
      {
        "icon": "skill/miniskill17.png",
        "text": "血刃[1]",
        "tooltip": "渴血一击附带攻击特效"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "稳健[1]",
        "tooltip": "渴血一击暴击伤害减[50]，但必定命中"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "魔法渴求[3]",
        "tooltip": "额外回复[10/20/30]%的已损法力值"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "急切[2]",
        "tooltip": "基础冷却减[1/2]秒"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNCriticalStrike.png",
      "name": "剑阵",
      "description": "召唤一柄巨剑从天而降，巨剑会在地上留存一段时间并持续对范围内随机敌人打击造成物理伤害"
    },
    "dataArea": [
      "基础冷却：15",
      "影响半径：400",
      "法术比例：100%/120%/140%",
      "持续时间：10",
      "伤害间隔：1.0",
      "",
      "施放距离：700",
      "法力消耗：70"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill23.png",
        "text": "天降正义[2]",
        "tooltip": "落下时对落点周围[100]范围内敌人造成[200/400]%法术比例的物理伤害"
      },
      {
        "icon": "skill/miniskill17.png",
        "text": "处决[2]",
        "tooltip": "巨剑总会攻击范围内生命百分比最低的敌人，并且敌人每失去[2/1]%生命值，伤害提高[1]%"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "砍倒[2]",
        "tooltip": "若没有学习处决节点，巨剑总会攻击范围内生命百分比最高的敌人，并且敌人每有[6/3]%生命值，伤害提高[2]%"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "剑刃加持[3]",
        "tooltip": "位于剑阵范围内的己方单位进行普攻时有[15/30/45]%概率触发剑阵的攻击，根据该单位的法术强度和剑阵技能的法术比例造成伤害"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "共享利刃[1]",
        "tooltip": "[剑刃加持]节点也会受[处决]或[砍倒]节点的增伤影响，同时学习只会有[处决]效果"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "御剑术[2]",
        "tooltip": "剑阵持续时间受增益加成影响，影响效果为[25/50]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNCleavingAttack.png",
      "name": "横扫",
      "description": "横扫前方[180]度的敌人，对它们造成物理伤害"
    },
    "dataArea": [
      "基础冷却：3",
      "影响半径：300",
      "攻击比例：100%/120%/140%",
      "",
      "",
      "",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill07.png",
        "text": "穿刺利刃[3]",
        "tooltip": "横扫的伤害类型等同于你的普攻，且横扫的伤害会获得该类型[5/10/15]的抗性穿透，若仍然为物理穿透加成翻倍"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "伤害全接[3]",
        "tooltip": "若你的命中高于敌人的闪避，每高[3]点，该敌人受到伤害的攻击比例加[1/2/3]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "收力[2]",
        "tooltip": "法力消耗减[10/20]，攻击角度减[30/60]"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "扫荡[2]",
        "tooltip": "攻击角度加[30/60]度"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "均衡之刃[1]",
        "tooltip": "法力消耗加[20]，横扫有[100]%概率触发攻击特效，但范围内有多个敌人时此概率会被均摊"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "替身攻击[1]",
        "tooltip": "法力消耗加[20]，同时在身后也会形成一次横扫"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNDefend.png",
      "name": "格挡",
      "description": "受到敌人攻击伤害时，有概率格挡，使该次伤害减少（无需装配该技能也能拥有节点中的装备使用权限）"
    },
    "dataArea": [
      "格挡概率：20%/25%/30%",
      "",
      "伤害减免：50%",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill20.png",
        "text": "盾卫[2]",
        "tooltip": "装备盾牌时，每块盾牌使格挡概率加[5/10]%"
      },
      {
        "icon": "skill/miniskill16.png",
        "text": "吸收[2]",
        "tooltip": "格挡远程攻击时伤害减免加[25/50]%"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "反震[2]",
        "tooltip": "格挡近战攻击时，使攻击者昏迷[1/2]秒"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "败魔[3]",
        "tooltip": "格挡也会抵挡法术伤害，减免比例为[20/40/60]%"
      },
      {
        "icon": "skill/miniskill18.png",
        "text": "战斗技巧[2]",
        "tooltip": "被动获得[3/6]力量和灵巧"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "双盾[1]",
        "tooltip": "可以装备两个盾牌"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs046.png",
      "name": "跳斩",
      "description": "跳向目标区域并对其中的敌人造成物理伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：200",
      "攻击比例：200%/250%/300%",
      "跳跃时间：1.0",
      "",
      "",
      "施放距离：600",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill21.png",
        "text": "小跳[2]",
        "tooltip": "法力消耗减[10/20]，攻击比例减[50/100]%"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "冲锋[2]",
        "tooltip": "每[4/2]点额外移动速度，增加跳斩[1]%攻击比例"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "跳远[2]",
        "tooltip": "施放距离加[200/400]，跳跃时间加[0.2/0.4]秒"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "震地[2]",
        "tooltip": "敌人还会被击晕[1/2]秒"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "冲击波[2]",
        "tooltip": "这次跳跃每有[10/5]距离，落地时实际影响半径加[1]"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "狂躁好动[2]",
        "tooltip": "跳斩无法暴击，但每有[4/2]点暴击，跳斩后返还[1]%剩余冷却，每有[4/2]点暴伤，跳斩跳跃速度提高[1]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNUpgradeMoonGlaive.png",
      "name": "飞刀术",
      "description": "开始引导，不断向目标方向扇形发射飞刀，每次都会消耗法力发射数枚，每枚飞刀对遇到的第一个敌人造成物理伤害且此伤害必中，一个敌人只会被同一波飞刀击中一次"
    },
    "dataArea": [
      "基础冷却：2",
      "扇形角度：60",
      "攻击比例：50%/60%/70%",
      "影响距离：800",
      "发射间隔：1.0",
      "飞刀枚数：3",
      "施放距离：800",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill13.png",
        "text": "多重攻击[2]",
        "tooltip": "同一名敌人可以被多枚飞刀击中，但除第一刀之外，后续飞刀只有[15/30]%伤害"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "随缘穿刺[2]",
        "tooltip": "飞刀的伤害不在必中，但有[50/100]%概率穿透敌人"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "密集投掷[2]",
        "tooltip": "飞刀数量加[2/4]，扇形角度加[40/60]"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "快速投掷[2]",
        "tooltip": "飞刀术的间隔受技能急速影响，影响效果为[30/60]%"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "幸运一击[2]",
        "tooltip": "飞刀有[5/10]%概率触发攻击特效"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "狂舞[2]",
        "tooltip": "技能变为没有目标，引导时消耗减[10]，基础间隔减[0.2/0.4]秒，每次发射固定只有一枚飞刀，目标方向为[800]距离内随机敌人的方向"
      }
    ]
  }
],
        
        // 圣光职业数据
        holy: [
  {
    "mainArea": {
      "icon": "skill/BTNInnerFire.png",
      "name": "神圣祝福",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNs052.png",
      "name": "神圣一指",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNs053.png",
      "name": "神圣光环",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNInvulnerable.png",
      "name": "圣盾术",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNWisp.png",
      "name": "耀光精灵",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNInvisibility.png",
      "name": "隐身",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNDivineIntervention.png",
      "name": "神圣之锤",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  }
],
        
        // 暗影职业数据
        shadow: [
  {
    "mainArea": {
      "icon": "skill/BTNs061.png",
      "name": "幻影打击",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNVengeanceIncarnate.png",
      "name": "支配影子",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNDoom.png",
      "name": "黑暗转换",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNDeathPact.png",
      "name": "七伤拳",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNUnholyFrenzy.png",
      "name": "邪恶狂热",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNOrbOfCorruption.png",
      "name": "腐蚀蜂群",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  },
  {
    "mainArea": {
      "icon": "skill/BTNDeathAndDecay.png",
      "name": "暗影凋零",
      "description": "此技能正在开发中，敬请期待"
    },
    "dataArea": [],
    "advancementArea": []
  }
]
    };
    
    // 创建表格HTML
    let tableHTML = `
        <p>欢迎来到${quality}资料库！</p>
        <p>${quality}分为火焰、风暴、冰冷、战斗、圣光和暗影六大职业，每个职业包含多个独特技能：</p>
        <div class="profession-container">
    `;
    
    // 生成六个职业表格
    const professions = [
        { key: 'fire', title: '火焰职业', colorClass: 'fire-title', tableClass: 'fire-profession' },
        { key: 'storm', title: '风暴职业', colorClass: 'storm-title', tableClass: 'storm-profession' },
        { key: 'ice', title: '冰冷职业', colorClass: 'ice-title', tableClass: 'ice-profession' },
        { key: 'battle', title: '战斗职业', colorClass: 'battle-title', tableClass: 'battle-profession' },
        { key: 'holy', title: '圣光职业', colorClass: 'holy-title', tableClass: 'holy-profession' },
        { key: 'shadow', title: '暗影职业', colorClass: 'shadow-title', tableClass: 'shadow-profession' }
    ];
    
    professions.forEach(profession => {
        tableHTML += `<h3 class="profession-table-title ${profession.colorClass}">${profession.title}</h3>`;
        
        // 生成该职业的所有技能表格
        professionData[profession.key].forEach((skill, index) => {
            // 如果技能数据为空，跳过
            if (!skill.mainArea) return;
            
            tableHTML += `
                <table class="profession-table ${profession.tableClass}">
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
    });
    
    tableHTML += `</div>`;
    
    contentBody.innerHTML = tableHTML;
    
    // 添加单元格编辑功能示例
    addCellEditFunctionality('profession');
}

// 单元格编辑功能（如果需要）
function addCellEditFunctionality(type) {
    // 这里可以添加单元格编辑功能
    console.log(`为${type}表格添加编辑功能`);
}