// 技能属性表格生成函数
function displayAttributeSkillsTable(contentBody, quality, color) {
    // 内置的技能JSON数据
    const skillsData = {
        // 力量技能数据
        strength: [
  {
    "mainArea": {
      "icon": "skill/BTNStormBolt.png",
      "name": "战锤投掷",
      "description": "向目标方向扔出一枚战锤攻击敌人，战锤再碰到敌人后对其造成物理伤害和昏迷效果"
    },
    "dataArea": [
      "基础冷却：6",
      "",
      "攻击比例：200%/240%/280%",
      "昏迷时间：1.0/1.5/2.0",
      "飞行距离：800",
      "",
      "施放距离：1000",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill22.png",
        "text": "火力[1]",
        "tooltip": "基础冷却减[5]秒，但攻击比例减[80]%并且无法造成昏迷"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "随和[3]",
        "tooltip": "法力消耗减[5/10/15]"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "分裂[1]",
        "tooltip": "法力消耗加[10]，改为朝目标方向两侧[15]度各投掷一枚，但攻击比例减[80]%"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "强力[3]",
        "tooltip": "昏迷时间加[1/2/3]秒，飞行速度加[25/50/75]%"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "爆头[3]",
        "tooltip": "战锤对已被昏迷的目标攻击比例加[80/160/240]%"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "回收[1]",
        "tooltip": "没有学习火力节点时，战锤未碰到敌人或未命中，都会减[1]秒剩余冷却"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNShockWave.png",
      "name": "震荡波",
      "description": "向目标方向释放震荡波，对途径敌人造成物理伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：200",
      "法术比例：160%/200%/240%",
      "技能距离：800/900/1000",
      "",
      "",
      "施放距离：1000",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill37.png",
        "text": "回响[2]",
        "tooltip": "法力消耗加[10/20]，波到达目的地后有[30/60]%概率会返回，再次造成伤害"
      },
      {
        "icon": "skill/miniskill13.png",
        "text": "共振[1]",
        "tooltip": "法力消耗加[20]，法术比例减[80]%，会朝两侧[30]度方向额外释放两道波"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "激荡[3]",
        "tooltip": "每点力量可以使震荡波获得[0.2/0.4/0.6]暴击几率"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "气力充沛[2]",
        "tooltip": "法力消耗减[10/20]，暴击伤害加[20/40]"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "全力一击[2]",
        "tooltip": "基础冷却加[2/4]秒，伤害提高[30/60]%"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "吸收[2]",
        "tooltip": "释放后，回复[10/20]%的已损法力"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNBattleRoar.png",
      "name": "战吼",
      "description": "震退周围的敌人并对它们造成百分比伤害（此技能无法暴击）"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：500/600/700",
      "百分比伤害：10%/12%/14%",
      "",
      "",
      "",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill33.png",
        "text": "狂嚎[2]",
        "tooltip": "法力消耗加[20/40]，伤害加[4/8]%"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "密集[2]",
        "tooltip": "影响半径减[150/300]，伤害加[4/8]%"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "狮吼[3]",
        "tooltip": "吼到的敌人昏迷[1/2/3]秒"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "振奋[2]",
        "tooltip": "战吼之后，在[4]秒内攻击提高[15/30]%"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "狂怒[2]",
        "tooltip": "战吼之后，在[4]秒内攻击速度加[20/40]"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "收音[1]",
        "tooltip": "基础冷却减[4]秒，但伤害根据当前生命而非最大生命"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNEarthquake.png",
      "name": "裂地一击",
      "description": "重击地面，对周围敌人造成物理伤害并使其昏迷"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：400",
      "攻击比例：120%/160%/200%",
      "昏迷时间：2",
      "",
      "",
      "",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "节省体力[2]",
        "tooltip": "法力消耗减[20/40]，但攻击比例减[50/100]%"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "快速打击[2]",
        "tooltip": "基础冷却减[2/4]秒，但影响半径减[50/100]"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "震荡[1]",
        "tooltip": "昏迷时间加[1]秒"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "崩坏[1]",
        "tooltip": "损失[20]%当前生命，根据损失的最大生命百分比，对被击中敌人造成等量百分比伤害"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "地火[3]",
        "tooltip": "法力消耗加[10/20/30]，在地上击开数道裂缝，在[4]秒内喷涌[2/4/6]次熔岩，每次对半径[400]内敌人造成[50]%法术比例的火焰伤害"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "回音击[3]",
        "tooltip": "法力消耗加[10/20/30]，敌人被命中后会在周围产生回音，再次造成[20/40/60]%法术比例的物理伤害，影响半径[300]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNDemolish.png",
      "name": "粉碎重击",
      "description": "攻击有几率发动粉碎重击，造成额外的范围攻击伤害并昏迷范围内敌人"
    },
    "dataArea": [
      "触发概率：20%/25%/30%",
      "影响半径：200",
      "攻击比例：60",
      "昏迷时间：1",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill07.png",
        "text": "碎甲[3]",
        "tooltip": "被击中的敌人进入碎甲状态，[10]秒内物理抗性减[10/20/30]"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "神力[2]",
        "tooltip": "攻击比例加[20/40]%，昏迷时间减[0.5/1]秒"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "威慑[2]",
        "tooltip": "昏迷时间加[1/2]秒，攻击比例减[10/20]%"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "强波[2]",
        "tooltip": "影响半径加[50/100]"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "鲁莽[2]",
        "tooltip": "被动获得[20/40]攻击速度，但触发概率减[5/10]%"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "蓄力[1]",
        "tooltip": "每次未触发粉碎重击的攻击，都会使触发概率加[5]%"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNReincarnation.png",
      "name": "泰坦之力",
      "description": "获得攻击力和法术强度，数值相当于最大生命值的一定比例（技能本体和进阶现实的数值均代表[1000]生命值时的加成）"
    },
    "dataArea": [
      "攻击：5/10/15",
      "法强：5/10/15",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill06.png",
        "text": "上古战神[1]",
        "tooltip": "攻击加[10]，不在转化法强"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "远古先知[1]",
        "tooltip": "未学习上古战神节点时，法强加[10]，不在转化攻击"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "卸甲[2]",
        "tooltip": "攻击速度加[5/10]，物理抗性减[5/10]"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "诅咒[2]",
        "tooltip": "技能急速加[5/10]，神秘抗性减[5/10]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "泰坦之旅[3]",
        "tooltip": "移速加[5/10/15]"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "莽撞[3]",
        "tooltip": "暴击伤害加[5/10/15]，闪避减[5/10/15]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNAvatarOn.png",
      "name": "天神下凡",
      "description": "变身为天神的化身，持续时间内免疫昏迷和冻结效果，并获得攻击力和法术强度"
    },
    "dataArea": [
      "基础冷却：35/30/25",
      "攻击力：30%",
      "",
      "持续时间：10",
      "法术强度：30%",
      "",
      "",
      "法力消耗：80"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill17.png",
        "text": "神威[3]",
        "tooltip": "持续期间获得[0.4/0.8/1.2]全能吸血"
      },
      {
        "icon": "skill/miniskill12.png",
        "text": "平和[3]",
        "tooltip": "持续时间加[2/4/6]秒，攻击加成减[10/20/30]%"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "平静[3]",
        "tooltip": "持续时间加[2/4/6]秒，法强加成减[10/20/30]%"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "硬化[1]",
        "tooltip": "持续期间获得[4]点物理抗性上限"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "强韧[1]",
        "tooltip": "持续期间获得[4]点元素抗性上限"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "败魔[1]",
        "tooltip": "持续期间获得[4]点神秘抗性上限"
      }
    ]
  }
],
        
        // 灵巧技能数据
        agility: [
  {
    "mainArea": {
      "icon": "skill/BTNs201.png",
      "name": "连击",
      "description": "攻击速度达到极限，在一定攻击次数或一定时间后恢复正常"
    },
    "dataArea": [
      "基础冷却：8/6/4",
      "",
      "",
      "最长时间：3",
      "最多次数：3",
      "",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill27.png",
        "text": "无情连击[2]",
        "tooltip": "法力消耗加[20/40]，最大攻击次数加[1/2]"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "充沛[2]",
        "tooltip": "法力消耗减[10/20]"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "保存[2]",
        "tooltip": "最长持续时间加[1/2]秒"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "追击[2]",
        "tooltip": "每次未发起的连击加[10/20]移速"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "幽灵刃[2]",
        "tooltip": "有[20/30]%概率不消耗最大攻击次数，但会使本次攻击的首个目标受到伤害的攻击比例减[30/50]%"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "快速拔刀[2]",
        "tooltip": "基础冷却加[2/4]秒，每次攻击有[25/50]%概率减少[1]秒剩余冷却"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs202.png",
      "name": "背刺",
      "description": "闪到目标身后并普攻目标一次，该次普攻附带额外比例的伤害"
    },
    "dataArea": [
      "基础冷却：6",
      "",
      "攻击比例：200%/250%/300%",
      "技能距离：300",
      "",
      "",
      "施放距离：300",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill26.png",
        "text": "娴熟[2]",
        "tooltip": "没有学习疯狂节点时，在敌人身后攻击会直接触发背刺，用此方式触发后剩余冷却减[25/50]%"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "精准礼仪[2]",
        "tooltip": "仅限主动施放的背刺，命中加[25/50]，暴击几率加[15/30]"
      },
      {
        "icon": "skill/miniskill16.png",
        "text": "伤口撒盐[2]",
        "tooltip": "目标每损失[1]%生命，背刺攻击比例加[1/2]%"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "疯狂[3]",
        "tooltip": "技能变为被动，在敌人身后攻击[15/30/45]%概率触发背刺，没有冷却和法力消耗"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "游击[2]",
        "tooltip": "基础冷却减[1/2]秒，攻击比例减[50/100]%"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "轻盈[1]",
        "tooltip": "施放距离加[300]，背刺后[3]秒内移速加[100]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNBlink.png",
      "name": "闪现",
      "description": "立即闪烁到目标位置"
    },
    "dataArea": [
      "基础冷却：5/4/3",
      "",
      "",
      "",
      "",
      "",
      "施放距离：500",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill27.png",
        "text": "跳跃[3]",
        "tooltip": "施放距离加[100/200/300]"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "精简[2]",
        "tooltip": "法力消耗减[10/20]"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "波动[2]",
        "tooltip": "在闪现的起点发出一道冲击波，对周围敌人造成物理伤害，影响半径[200]，法术比例[50/100]%"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "回响[2]",
        "tooltip": "在闪现的终点发出一道冲击波，对周围敌人造成物理伤害，影响半径[200]，法术比例[50/100]%"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "震荡[1]",
        "tooltip": "闪现发起的冲击波会使敌人昏迷[1]秒"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "传导[2]",
        "tooltip": "闪现发起的冲击波影响半径加[50/100]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNEvasion.png",
      "name": "灵动步伐",
      "description": "获得移动速度和闪避"
    },
    "dataArea": [
      "移速：20/30/40",
      "闪避：10/15/20",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill29.png",
        "text": "轻快[2]",
        "tooltip": "移速加[20/40]，闪避减[10/20]"
      },
      {
        "icon": "skill/miniskill18.png",
        "text": "游击[2]",
        "tooltip": "每有[4/2]点永久的额外移速(基础移速300)，获得[1]点的攻击和法强"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "走位[2]",
        "tooltip": "若你在之前一秒内移动过，获得持续[1]秒的增益，加[20/40]闪避"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "回避[2]",
        "tooltip": "每次闪避获得[10/20]护盾"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "迅速[2]",
        "tooltip": "获得[10/20]攻击速度"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "迅捷[2]",
        "tooltip": "获得[10/20]技能急速"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNStrongDrink.png",
      "name": "酒雾",
      "description": "对目标区域释放酒雾，使其中的敌人命中降低"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：300",
      "",
      "持续时间：20",
      "命中减益：30/45/60",
      "",
      "施放距离：600",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill21.png",
        "text": "提神[3]",
        "tooltip": "若命中友方，回复目标[10/20/30]法力"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "醉拳[2]",
        "tooltip": "若命中友方，使其获得[5]秒增益，加[15/30]暴击几率"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "醉酒狂暴[2]",
        "tooltip": "若命中友方，使其获得[5]秒增益，加[25/50]暴击伤害"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "扩散[2]",
        "tooltip": "影响半径加[50/100]"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "快速投掷[2]",
        "tooltip": "基础冷却减[1/2]秒"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "宿醉[1]",
        "tooltip": "受影响的敌人还会昏迷[1]秒"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNCorpseExplode.png",
      "name": "巨人杀手",
      "description": "对一个敌人发动一次强力攻击，造成物理伤害，目标的每个等级都会增加此技能的攻击比例，目标[20]级时达到增伤上限"
    },
    "dataArea": [
      "基础冷却：6",
      "每等级比例：15%",
      "攻击比例：200%/250%/300%",
      "",
      "",
      "",
      "施放距离：100",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill16.png",
        "text": "砍倒[3]",
        "tooltip": "额外造成[10/20/30]%的百分比伤害"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "震慑[1]",
        "tooltip": "若击杀目标，对根据目标的等级和生命对周围敌人造成伤害，伤害半径[250]"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "穿透[3]",
        "tooltip": "此技能无视[10/20/30]物理抗性"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "蓄力[3]",
        "tooltip": "基础冷却加[1/2/3]秒，暴击伤害加[40/80/120]"
      },
      {
        "icon": "skill/miniskill32.png",
        "text": "收割[1]",
        "tooltip": "若击杀目标，返还一半剩余冷却"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "暗影刃[1]",
        "tooltip": "施放距离加[300]，变为神秘伤害"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNs207.png",
      "name": "箭雨",
      "description": "在目标区域召唤一阵箭雨，持续时间内大量箭矢落入区域内随机位置，对伤害范围内的敌人造成物理伤害（若进阶节点每秒转化的特殊箭矢超过基础数量，则按比例平均分配）"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：300",
      "法术比例：50%/60%/70%",
      "持续时间：3",
      "每秒箭矢数量：30",
      "伤害半径：60",
      "施放距离：800",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill23.png",
        "text": "密集[2]",
        "tooltip": "影响半径减[50/100]"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "陷阵[2]",
        "tooltip": "施放距离减[200/400]，持续时间加[0.5/1.0]秒"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "冰冻之箭[2]",
        "tooltip": "每秒有[10/20]支箭矢转化为冰冻箭矢，此箭矢造成元素伤害，并且有[50]%概率冻结击中的敌人[1]秒"
      },
      {
        "icon": "skill/miniskill01.png",
        "text": "灼热之箭[2]",
        "tooltip": "每秒有[10/20]支箭矢转化为灼热箭矢，此箭矢造成元素伤害，并且法术比例加[30]%"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "黑暗之箭[2]",
        "tooltip": "每秒有[10/20]支箭矢转化为黑暗箭矢，此箭矢造成神秘伤害，并使敌人[6]秒内攻击和法强降低[30]%"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "光辉之箭[2]",
        "tooltip": "每秒有[10/20]支箭矢转化为光辉箭矢，此箭矢造成神秘伤害，可以治疗伤害范围内的友方单位[150]生命"
      }
    ]
  }
],
        
        // 智力技能数据
        intelligence: [
  {
    "mainArea": {
      "icon": "skill/BTNManaBurn.png",
      "name": "奥术冲击",
      "description": "强大的魔法瞬间打击目标敌人，造成高额伤害，元素伤害和神秘伤害各占一半"
    },
    "dataArea": [
      "基础冷却：5",
      "",
      "法术比例：300%/350%/400%",
      "",
      "",
      "",
      "施放距离：400",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill15.png",
        "text": "灵能传送[2]",
        "tooltip": "施放距离加[200/400]，但法术比例减[50/100]%"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "魔力冲击[2]",
        "tooltip": "目标若有主动技能，法术比例加[100/200]%"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "心灵冲击[2]",
        "tooltip": "法力消耗加[5/10]，造成[1/2]秒昏迷"
      },
      {
        "icon": "skill/miniskill39.png",
        "text": "纯粹能量[2]",
        "tooltip": "伤害类型变为单一，[1]级造成神秘伤害，[2]级造成元素伤害"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "魔法凝滞[2]",
        "tooltip": "目标若有主动技能，使其一项技能剩余冷却时间加[2/4]秒"
      },
      {
        "icon": "skill/miniskill11.png",
        "text": "冲击之光[2]",
        "tooltip": "释放一道激光能量，距离[1000]，攻击途径除目标以外的敌人，继承[25/50]%的伤害和昏迷效果"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNMassTeleport.png",
      "name": "相位传送",
      "description": "传送到目标区域的中心并扭曲周围的空间，区域内敌人会被击退并受到神秘伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：250",
      "法术比例：100%/150%/200%",
      "",
      "",
      "",
      "施放距离：600",
      "法力消耗：50"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill36.png",
        "text": "轻灵[2]",
        "tooltip": "施放距离加[200/400]，但法术比例减[25/50]%"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "撕裂[3]",
        "tooltip": "法力消耗加[10/20/30]，法术比例加[100/200/300]%"
      },
      {
        "icon": "skill/miniskill22.png",
        "text": "收放自如[3]",
        "tooltip": "若目标区域没有敌人，返还[25/50/75]%的法力消耗"
      },
      {
        "icon": "skill/miniskill25.png",
        "text": "群体传送[1]",
        "tooltip": "你的召唤物也会传送到区域内随机位置"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "漩涡[1]",
        "tooltip": "不再击退敌人，反而向内牵引敌人"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "避战[2]",
        "tooltip": "若目标区域至少有两个敌人，你自己不会传送过去，此节点[2]级时你的远程召唤物也拥有此效果"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNNeutralManaShield.png",
      "name": "法力屏障",
      "description": "使用法力能量在周围建造一面屏障，可以抵挡一定比例的伤害，但会消耗法力，再次释放关闭屏障（法力屏障结算在护盾之前）"
    },
    "dataArea": [
      "基础冷却：5",
      "",
      "",
      "",
      "",
      "伤害吸收比例：10%/20%/30%",
      "每点法力免伤：2.5",
      "法力消耗：0"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill22.png",
        "text": "高效[3]",
        "tooltip": "每点法力减免伤害加[0.5/1/1.5]"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "全面防护[2]",
        "tooltip": "伤害吸收的比例加[15/30]%，但开启时闪避减[25/50]"
      },
      {
        "icon": "skill/miniskill26.png",
        "text": "复仇[2]",
        "tooltip": "消耗法力抵挡伤害后，根据消耗量每点法力都增加[1]%的概率去对伤害来源复仇，造成[150/300]%法术比例的神秘伤害"
      },
      {
        "icon": "skill/miniskill17.png",
        "text": "终结[1]",
        "tooltip": "当前每有[1%]已损法力，[复仇]节点的伤害比例就会加[3%]"
      },
      {
        "icon": "skill/miniskill21.png",
        "text": "安神术[2]",
        "tooltip": "开启屏障时，法力回复提高[15/30]%"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "护盾充能[2]",
        "tooltip": "你护盾强度的[20/40]%部分也会作用于法力屏障，让每点法力可以抵挡更多伤害"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNAbsorbMagic.png",
      "name": "智慧光环",
      "description": "被动增加法力和法力回复"
    },
    "dataArea": [
      "每秒回蓝：1/2/3",
      "法力：10/20/30",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill39.png",
        "text": "虚化[2]",
        "tooltip": "物理伤害加成减[20/40]，元素和神秘伤害加成加[10/20]"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "大法师[2]",
        "tooltip": "技能急速加[15/30]，攻击速度减[10/20]"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "洞察[2]",
        "tooltip": "每[5]点智力增加[1/2]点命中"
      },
      {
        "icon": "skill/miniskill14.png",
        "text": "医术[2]",
        "tooltip": "每[5]点智力增加[1/2]点治疗强度"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "后备能量[2]",
        "tooltip": "施放技能后若法力低于[10]%时，会获得[10]秒的增益，法力回复提高[30/60]%"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "最后冲刺[2]",
        "tooltip": "后备能量节点的增益，还会使移动速度加[30/60]，此节点无需学习后备能量节点"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNSpellSteal.png",
      "name": "附魔",
      "description": "被动为武器附加魔力，普攻根据法术比例造成额外的神秘伤害"
    },
    "dataArea": [
      "",
      "",
      "法术比例：50%/60%/70%",
      "",
      "",
      "",
      "",
      ""
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "法力燃烧[2]",
        "tooltip": "消耗[2/4]法力，法术比例加[20/40]%"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "狂热[2]",
        "tooltip": "攻击速度加[10/20]"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "导电[2]",
        "tooltip": "命中加[10/20]，[50/100]%的附加神秘伤害转换为元素伤害"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "强化利刃[2]",
        "tooltip": "法术比例减[20/40]%，造成额外[40/80]%法术比例的物理伤害"
      },
      {
        "icon": "skill/miniskill38.png",
        "text": "虚化魔刃[2]",
        "tooltip": "元素穿透和神秘穿透加[5/10]"
      },
      {
        "icon": "skill/miniskill13.png",
        "text": "净化能量[2]",
        "tooltip": "普攻有[20/40]%概率清除敌人一个正面增益状态"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNGenericSpellImmunity.png",
      "name": "圆舞斩",
      "description": "操控魔法力量化成利刃，攻击周围所有敌人，造成神秘伤害"
    },
    "dataArea": [
      "基础冷却：3",
      "影响半径：300",
      "攻击比例：60%/80%/100%",
      "",
      "",
      "",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "开幕[2]",
        "tooltip": "法力高于一半时，会额外消耗[20/40]法力，使攻击比例加[40/80]%，影响半径加[100/200]"
      },
      {
        "icon": "skill/miniskill36.png",
        "text": "终曲[2]",
        "tooltip": "若施放时法力不足[100]，攻击比例加[40/80]%，影响半径加[100/200]"
      },
      {
        "icon": "skill/miniskill05.png",
        "text": "连击[1]",
        "tooltip": "攻速高于[100]时，每高一点会增加[1]%的概率在完成攻击后发动一次比例减半的连击，概率溢出会产生额外的连击"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "雷光[3]",
        "tooltip": "暴击加[10/20/30]，伤害类型变为元素"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "决斗[3]",
        "tooltip": "如果仅仅命中一个敌人，攻击比例加[40/80/120]%"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "手刃[1]",
        "tooltip": "法力消耗加[20]，对距离最近的那个敌人，视为一次普攻"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNWispSplode.png",
      "name": "魔力爆炸",
      "description": "将法力能量输送到目标位置然后引爆，造成高额元素伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "影响半径：200/250/300",
      "法术比例：200%",
      "",
      "",
      "",
      "施放距离：600",
      "法力消耗：0"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill32.png",
        "text": "能量转移[2]",
        "tooltip": "消耗当前法力的[20/40]%，每消耗[1]点法术比例加[1%]"
      },
      {
        "icon": "skill/miniskill33.png",
        "text": "爆裂护盾[2]",
        "tooltip": "消耗当前护盾的[20/40]%，每消耗[3]点法术比例加[1%]"
      },
      {
        "icon": "skill/miniskill19.png",
        "text": "能量回收[2]",
        "tooltip": "可以击中友军和自己，每[4/2]%的法术比例会提供[1]点护盾"
      },
      {
        "icon": "skill/miniskill37.png",
        "text": "秘法传递[1]",
        "tooltip": "施法距离加[200]，伤害类型转换为神秘"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "异常波动[3]",
        "tooltip": "魔力爆炸的暴击加[15/30/45]，但命中减[10/20/30]"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "连环爆炸[2]",
        "tooltip": "基础冷却减[1/2]秒"
      }
    ]
  }
],
        
        // 统御技能数据
        dominance: [
  {
    "mainArea": {
      "icon": "skill/BTNCallToArms.png",
      "name": "卫兵小队",
      "description": "召唤一个卫兵在目标点，卫兵为近战单位，没有持续时间，攻击造成物理伤害，初始属性拥有额外的闪避加成"
    },
    "dataArea": [
      "基础冷却：10",
      "数量上限：3",
      "基础生命：400",
      "",
      "",
      "基础攻击和法强：40/60/80",
      "闪避加成：20/30/40",
      "施放距离：600",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill10.png",
        "text": "坚韧[2]",
        "tooltip": "生命加[150/300]"
      },
      {
        "icon": "skill/miniskill30.png",
        "text": "持盾[3]",
        "tooltip": "伤害减免[10/20/30]%，物理抗性加[20/40/60]"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "抵抗[2]",
        "tooltip": "元素抗性和神秘抗性加[30/60]"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "锋刃[1]",
        "tooltip": "物理伤害加[20]%，暴击加[20]"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "卸甲[3]",
        "tooltip": "伤害减免减[10/20/30]%，攻击速度加[30/60/90]，移动速度加[30/60/90]"
      },
      {
        "icon": "skill/miniskill18.png",
        "text": "帮手[1]",
        "tooltip": "数量上限加[1]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNReveal.png",
      "name": "火枪小队",
      "description": "召唤一个火枪手为你作战，火枪手为远程单位射程为[600]，没有持续时间，攻击造成物理伤害，初始属性拥有额外的命中加成"
    },
    "dataArea": [
      "基础冷却：10",
      "数量上限：3",
      "基础生命：200/400/600",
      "",
      "",
      "基础攻击和法强：60",
      "命中加成：20/30/40",
      "",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill29.png",
        "text": "轻装上阵[2]",
        "tooltip": "所有抗性减[10/20]，数量上限加[1/2]"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "物理专精[3]",
        "tooltip": "基础攻击加[20/40/60]，基础法强减[20/40/60]"
      },
      {
        "icon": "skill/miniskill02.png",
        "text": "烈性火药[2]",
        "tooltip": "转换为元素伤害，暴击加[20/40]"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "穿甲弹[2]",
        "tooltip": "物理穿透加[20/40]"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "站位训练[2]",
        "tooltip": "闪避加[40/80]"
      },
      {
        "icon": "skill/miniskill27.png",
        "text": "站桩输出[1]",
        "tooltip": "移动速度减[40]，攻击速度加[40]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNBearForm.png",
      "name": "动物伙伴",
      "description": "召唤一只动物伙伴为你作战，持续一段时间后消失，动物伙伴有额外的全抗性加成，类别共有三种，物理近战的灰熊，物理远程的豪猪，元素远程的猎鹰，远程射程均为[600]（三种伙伴进阶节点增加的召唤概率不足[100]%时，概率为[0]的伙伴平分剩余的概率；超出[100]%时，总概率按比例缩减到[100]%）"
    },
    "dataArea": [
      "基础冷却：15",
      "持续时间：20/30/40",
      "基础生命：400",
      "",
      "",
      "基础攻击和法强：100",
      "全抗性加成：10/20/30",
      "",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill14.png",
        "text": "巨熊之灵[2]",
        "tooltip": "灰熊召唤概率加[50/100]%，基础生命加[300/600]"
      },
      {
        "icon": "skill/miniskill06.png",
        "text": "野猪之灵[2]",
        "tooltip": "豪猪召唤概率加[50/100]%，攻击速度加[30/60]"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "鹰隼之灵[2]",
        "tooltip": "猎鹰召唤概率加[50/100]%，基础攻击和法强加[30/60]"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "重击[2]",
        "tooltip": "灰熊的攻击有[25/50]%概率造成额外[150]%比例的物理伤害，并击晕目标[1]秒"
      },
      {
        "icon": "skill/miniskill04.png",
        "text": "溅射[2]",
        "tooltip": "豪猪的攻击会溅射到目标周围[200]范围的敌人，造成[30/60]%攻击比例的伤害"
      },
      {
        "icon": "skill/miniskill23.png",
        "text": "天雷[2]",
        "tooltip": "猎鹰放出闪电，打击一个目标造成[150/300]%法术比例的元素伤害，基础冷却[8]秒"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNPoisonSting.png",
      "name": "寄生兽",
      "description": "在目标敌人身上种下一只寄生兽使其中毒，持续造成神秘伤害，若目标在持续期间死亡，在其尸体上召唤一只寄生兽为你作战，寄生兽为近战单位，持续一段时间后消失，攻击造成物理伤害"
    },
    "dataArea": [
      "基础冷却：10",
      "中毒持续时间：10",
      "伤害每秒比例：20%/60%/100%",
      "基础生命：350",
      "",
      "基础攻击和法强：70",
      "召唤持续时间：30",
      "施放距离：600",
      "法力消耗：40"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill26.png",
        "text": "双胞胎[2]",
        "tooltip": "寄生兽降生时有[25/50]%概率额外召唤一只"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "耐久[2]",
        "tooltip": "你增益加成属性的[25/50]%会作用于寄生兽，增加它的持续时间"
      },
      {
        "icon": "skill/miniskill16.png",
        "text": "献祭[1]",
        "tooltip": "施放技能时，若你生命值高于一半，会失去[10]%生命从自己身体中召唤一只永久存在的寄生兽，永生的寄生兽数量上限[1]"
      },
      {
        "icon": "skill/miniskill35.png",
        "text": "疯狂生长[2]",
        "tooltip": "献祭节点的生命值消耗翻倍，你每有[2000/1500]最大生命值，寄生兽上限加[1]"
      },
      {
        "icon": "skill/miniskill18.png",
        "text": "全面强化[3]",
        "tooltip": "基础生命加[50/100/150]，基础攻击和法强加[10/20/30]，所有抗性加[10/20/30]"
      },
      {
        "icon": "skill/miniskill17.png",
        "text": "毒爪[2]",
        "tooltip": "寄生兽攻击处于任意中毒状态的敌人时，额外造成[50/100]%法术比例的神秘伤害"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNHealingWard.png",
      "name": "庇护守卫",
      "description": "召唤一个庇护守卫在目标点，守卫无法移动且不会攻击，持续一段时间后消失，每间隔一段时间给周围友军提供护盾（庇护守卫的治疗和加盾来源视为召唤者本体，会使用召唤者本体的治疗强度和护盾强度）"
    },
    "dataArea": [
      "基础冷却：12",
      "影响半径：500",
      "基础生命：200",
      "持续时间：24",
      "",
      "护盾值：40/70/100",
      "间隔时间：4",
      "施放距离：600",
      "法力消耗：30"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill14.png",
        "text": "治疗守卫[2]",
        "tooltip": "还会治疗友军[50/100]生命"
      },
      {
        "icon": "skill/miniskill28.png",
        "text": "手动提速[1]",
        "tooltip": "庇护守卫的间隔时间不在受它自己技能急速影响，而是使用召唤者[50]%的技能急速"
      },
      {
        "icon": "skill/miniskill34.png",
        "text": "屹立不倒[2]",
        "tooltip": "基础生命加[100/200/300]，持续时间加[4/8/12]秒"
      },
      {
        "icon": "skill/miniskill10.png",
        "text": "战斗防护[2]",
        "tooltip": "还会施加持续[5]秒的增益，增加[10/20]物理抗性和闪避"
      },
      {
        "icon": "skill/miniskill20.png",
        "text": "自然消解[2]",
        "tooltip": "还会施加持续[5]秒的增益，增加[10/20]元素和神秘抗性"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "自由守卫[2]",
        "tooltip": "影响半径加[50/100]，还会施加持续[5]秒的增益，增加[25/50]移动速度"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNPillage.png",
      "name": "战斗命令",
      "description": "被动提高召唤物的攻击速度和技能急速，主动使用可使你的宠物们向目标点攻击移动"
    },
    "dataArea": [
      "基础冷却：2",
      "攻击速度：10/20/30",
      "技能急速：10/20/30",
      "",
      "",
      "",
      "施放距离：1000",
      "法力消耗：0"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill35.png",
        "text": "以战养战[2]",
        "tooltip": "召唤物全能吸血加[0.5/1.0]"
      },
      {
        "icon": "skill/miniskill29.png",
        "text": "快速行进[2]",
        "tooltip": "召唤物移动速度加[20/40]"
      },
      {
        "icon": "skill/miniskill08.png",
        "text": "致命指令[2]",
        "tooltip": "召唤物暴击加[10/20]"
      },
      {
        "icon": "skill/miniskill07.png",
        "text": "侵攻[2]",
        "tooltip": "召唤物物理伤害加[10/20]，物理穿透加[5/10]"
      },
      {
        "icon": "skill/miniskill24.png",
        "text": "自然[2]",
        "tooltip": "召唤物元素伤害加[10/20]，元素穿透加[5/10]"
      },
      {
        "icon": "skill/miniskill38.png",
        "text": "魔化[2]",
        "tooltip": "召唤物神秘伤害加[10/20]，神秘穿透加[5/10]"
      }
    ]
  },
  {
    "mainArea": {
      "icon": "skill/BTNSerpentWard.png",
      "name": "灵蛇守卫",
      "description": "召唤一个灵蛇守卫在目标点，守卫无法移动为远程单位射程为[600]，持续一段时间后消失，攻击造成物理伤害，初始属性拥有额外的攻击速度加成"
    },
    "dataArea": [
      "基础冷却：8",
      "持续时间：24",
      "基础生命：150/200/250",
      "",
      "",
      "基础攻击和法强：60",
      "攻击速度加成：40/60/80",
      "施放距离：600",
      "法力消耗：20"
    ],
    "advancementArea": [
      {
        "icon": "skill/miniskill05.png",
        "text": "群蛇阵[2]",
        "tooltip": "基础冷却减[1/2]秒，持续时间加[3/6]秒"
      },
      {
        "icon": "skill/miniskill40.png",
        "text": "魔蛇复生[2]",
        "tooltip": "若你的法力值高于一半，灵蛇因受到伤害阵亡后，有[25/50]%概率消耗[20]法力在原地重新召唤"
      },
      {
        "icon": "skill/miniskill09.png",
        "text": "残暴之心[3]",
        "tooltip": "暴击加[10/20/30]，暴击伤害加[20/40/60]"
      },
      {
        "icon": "skill/miniskill03.png",
        "text": "魔蛇之吻[1]",
        "tooltip": "攻击伤害转换为神秘，攻击后有[10]%概率使目标昏迷[1]秒"
      },
      {
        "icon": "skill/miniskill15.png",
        "text": "原力喷射[2]",
        "tooltip": "基础攻击加[10/20]，攻击距离加[100/200]"
      },
      {
        "icon": "skill/miniskill31.png",
        "text": "虚化喷射[2]",
        "tooltip": "攻击只会造成[75/50]%伤害，但会额外附加[50/100]%法术比例的伤害，伤害类型和普攻的类型相同"
      }
    ]
  }
]
    };
    
    // 创建表格HTML
    let tableHTML = `
        <p>欢迎来到${quality}技能资料库！</p>
        <p>${quality}技能分为力量、灵巧、智力和统御四大类，每类包含多个独特技能：</p>
        <div class="skills-container">
    `;
    
    // 生成四个属性表格
    const attributes = [
        { key: 'strength', title: '力量技能', colorClass: 'strength-title', tableClass: 'strength-skill' },
        { key: 'agility', title: '灵巧技能', colorClass: 'agility-title', tableClass: 'agility-skill' },
        { key: 'intelligence', title: '智力技能', colorClass: 'intelligence-title', tableClass: 'intelligence-skill' },
        { key: 'dominance', title: '统御技能', colorClass: 'dominance-title', tableClass: 'dominance-skill' }
    ];
    
    attributes.forEach(attr => {
        tableHTML += `<h3 class="skills-table-title ${attr.colorClass}">${attr.title}</h3>`;
        
        // 生成该属性的所有技能表格
        skillsData[attr.key].forEach((skill, index) => {
            // 如果技能数据为空，跳过
            if (!skill.mainArea) return;
            
            tableHTML += `
                <table class="skill-table ${attr.tableClass}">
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
    addCellEditFunctionality('skills');
}

// 单元格编辑功能（如果需要）
function addCellEditFunctionality(type) {
    // 这里可以添加单元格编辑功能
    console.log(`为${type}表格添加编辑功能`);
}