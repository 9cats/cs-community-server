const axios = require("axios")

const mapchiname_93x = {
  ze_2012_p3: "世界末日到啦",
  ze_2021_xmas_world: "圣诞小镇",
  ze_203_Factory_b9: "203号生化工厂",
  ze_30_seconds__b21_p2: "生死30秒",
  ze_666_crazy_escape_v2_4: "恶魔逃亡",
  ze_8bit_csgo2_fix: "俄罗斯方块之城大冒险",
  ze_abandoned_bio_bunker_v1_4: "废弃燃料惊魂",
  ze_abandoned_industry_va2: "废弃工厂大撤离",
  ze_abandoned_project_v1_2_csgo: "废弃项目",
  ze_AcuticNotes_v1_2f: "技巧很重要",
  ze_aepp_nano_grid2_v1h: "上世纪电子游戏【咸】",
  ze_alchemy_b7: "神秘力量",
  ze_alien_mountain_escape_ffvii_v5_hdr: "外星人高山逃亡:最终幻想7",
  ze_alien_mountain_escape_p4: "外星人高山逃亡",
  ze_alien_shooter_v7_ps4: "孤胆枪手",
  ze_alien_vs_predator_v6go_fix: "异形大战铁血战士",
  ze_alitur_v3: "俄里特",
  ze_amalgamation_v1_1: "混合",
  ze_Ancient_Wrath_v2_test27_g6t: "古代遗迹:生化金字塔",
  ze_angelbeats_guild_a1_fix2: "天使的心跳",
  ze_anima_ruins_v2_2: "灵魂废墟",
  ze_antartika_b2_csgo: "南极基地逃亡之旅",
  ze_anzalone_v3_fix: "安扎隆",
  ze_Aooka_v3_t6: "龙之殿",
  ze_aot_trost_v8: "进击的巨人:托洛斯特V7",
  ze_ApertureScience_p2: "光圈科技",
  ze_apocatastasis_v1_2: "最终剿匪",
  ze_Apollo_p2: "阿波罗登月计划",
  ze_aragami_v1_1: "竹星林月",
  ze_arcade_parade_b6: "街机小游戏",
  ze_arctic_escape_p2: "极地逃亡",
  ze_ardeca_revamp: "安蒂坎",
  ze_artika_base_v1_2: "探秘基地",
  ze_artika_base_v1_4: "探秘基地",
  ze_ashen_keep_p: "黑暗之魂",
  ze_assassins_creed_csgo: "刺客信条",
  ze_astral_v2_1_fix: "星夜城堡v2",
  ze_atix_apocalypse_p3: "末日逃生",
  ze_atix_panic_v1: "蓝天大厦",
  ze_atos_v2_3: "梦幻阿托斯",
  ze_Aurora_tower_v6_8: "极光塔传说",
  ze_Avalanche_Reboot_beta7_g3t: "重启雪崩计划【难】",
  ze_avalanche_reboot_beta7_p2: "重启雪崩计划",
  ze_aware_v1_2a: "梦中的圣堂",
  ze_azathoth_v1_1: "阿撒托斯",
  ze_aztecnoob_p2: "走吊桥的是菜鸡",
  ze_aztec_temple_p2: "阿兹特克神庙逃亡",
  ze_A_E_S_T_H_E_T_I_C_v1_1: "舞台剧",
  ze_baboon_escape_v1_012: "狒狒神庙大逃亡",
  ze_backrooms_p3: "后室迷宫",
  ze_barrage_p2: "求生之路：大坝",
  ze_Bathroom_v2_5: "浴室逃亡",
  ze_beyond_the_boundary_v1_4: "境界彼方",
  ze_beyond_the_boundary_v1_5: "境界彼方",
  ze_bh3rd_v2_b3: "崩坏3测试版",
  ze_bholes_budhole_1_1: "我的温暖小屋",
  ze_bigfoot_escapeica_v3_4: "吸血鬼洞穴",
  ze_biohazard2_rpd_004_p3_fix2: "生化危机：警察局",
  ze_biohazard2_sewer_004_p8: "生化危机：下水道",
  ze_biohazard3_nemesis_b5_2: "生化危机3:复仇女神",
  ze_biohazard_manor_004_p4: "生化危机：洋馆",
  ze_biomes_attack_b1_2: "生态保卫战",
  ze_bioshock_v6_2_csgo7: "生化奇兵",
  ze_bioshock_v7_1_csgo_a2: "生化奇兵V7",
  ze_bisounours_party_p2: "迷糊熊之彩虹城堡",
  ze_blackmesa_escape_p4: "黑山基地:重装上阵",
  ze_blocky_mess_b2: "混乱的方块",
  ze_bloodstrike_escape_v2: "血战逃生",
  ze_blood_castle_b7: "血色城堡",
  ze_blue_magic_castle_v3_1: "蓝色魔法城堡",
  ze_blue_zenith_v0_2: "幽蓝格调",
  ze_boacceho_p4: "咸鱼大逃亡",
  ze_boatescape111_v1_1f: "小艇逃亡111之随机大挑战",
  ze_Boatescape_Ultimate_t2f1: "坐船终极大乱斗",
  ze_boredom_p: "无趣",
  ze_bowser_in_the_fire_sea_v1e_rs2: "火海中的库巴",
  "ze_bp-infested-prison_p2": "监狱大撤离",
  ze_breakable_p3: "破坏之旅",
  ze_bulhufas_a1_1: "布卢法斯",
  ze_bunker_escape_v1_2: "煤仓大撤退",
  ze_cancer_gopnik_escape_v9_2: "病名为战斗民族",
  ze_candy_star_a3: "糖果星",
  ze_castlevania_64_v1_3_b9_go: "恶魔城启示录外传",
  ze_castlevania_p1_7: "恶魔城:整装待发",
  ze_castle_bridge_v1_4: "古堡大桥",
  ze_castle_of_the_bladekeeper_v1: "充钱就能变强",
  ze_ccc_ffvii_alien_reactor: "最终幻想7：外星阿里炉",
  ze_ccc_floator_mislands_timantetrix_v2: "僵尸逃跑:迷失，回忆之地",
  ze_ccc_toastersand_v2: "混搭面包机",
  ze_chaos_v7_7: "乱战",
  ze_check_b1_1f: "西洋棋魂",
  ze_cheezylab_beta7: "实验室惊魂",
  ze_chemical_weapons_depot_v3a: "化学武器仓库",
  ze_Chicken_Lords_Tower_ig1: "小鸡城堡大逃亡",
  ze_chicken_ranch_v2_2: "小鸡工厂之旅",
  ze_christmas_b2_1: "圣诞节",
  ze_christmas_infection_p2: "圣诞夜惊魂",
  ze_chroma_v0_4_csgo5: "色调之形",
  ze_chrono_trigger_b3_fix5: "时空之轮",
  ze_chronus_a1: "克洛诺斯山谷",
  ze_clara_civitate_v3: "海市蜃城：克拉尔",
  ze_clockwork_v1d1: "时轮律动",
  ze_coastalcity_b10: "沿海城市",
  ze_codevein_v1_cm4: "噬血代码",
  ze_collective_v1_8: "小地图大集合",
  ze_colorful_v2_4: "黑白的绚烂",
  ze_colorlicouspilar_p4: "彩色世界",
  ze_colors_p3: "色彩世界",
  ze_color_escape_b2: "色彩逃亡",
  ze_color_traps_beta2_4: "彩色陷阱逃亡",
  ze_complex_va3: "拿头逃生2",
  ze_conflict_v4_4: "公交车冲突",
  ze_contradiction_spiral_a2_2: "矛盾螺旋",
  ze_copy_escape_v2_3: "复制大逃亡【普】",
  ze_core_v2b: "熔火核心",
  ze_corrupted_bridge_b1_3: "崩塌大桥",
  ze_crashbandicoot_p3: "古惑狼",
  ze_crazykart_v4: "卤粉卡丁车",
  ze_crypt_v1_4: "墓穴逃亡",
  ze_crystal_a2: "晶状世界",
  ze_crystal_escape_v2_final: "水晶逃亡v1",
  ze_crystal_tower_a2: "水晶塔",
  ze_csgo_grey2: "灰白大作战",
  ze_cso_decoy_v1_hdr: "致命陷阱",
  ze_cursed_bear_tales_v1_2: "诅咒之熊传说",
  ze_cursed_ruins_v3: "遗迹逃亡",
  ze_CV_LOSII_Castle_Siege_b4: "洛西城堡：围攻",
  ze_CYBERDERP_p3_KIA: "魔化现实主义【普难】",
  ze_cyberia_v1: "网格计划",
  ze_cyberpunk_x_a07: "赛博朋克X",
  ze_dangerous_waters_v1h_03_b: "危险的水域",
  ze_dangerous_waters_xmas_v2_4: "圣诞节危险水域",
  ze_danmaku_v1_5: "梦幻弹幕",
  ze_dark_catharsis_v1_2: "神圣净化",
  ze_dark_souls_ptd_csgo2: "黑魂1",
  ze_Deadcore_s7f2: "死亡核心S",
  ze_deadly_crash_a2: "夺命姿态",
  ze_Dead_Planet_Escape_b10: "死星逃亡",
  ze_dear_v1: "月神殿",
  ze_deathinvain_palace_v2: "死亡神殿",
  ze_death_star_escape_v4_3_p2: "死亡之星大撤退",
  ze_Death_Valley_b2: "死亡山谷",
  ze_death_wish_v6: "死亡之愿",
  ze_deepice_p3: "极度深寒",
  ze_defensepart_escape_go1: "学会找点守",
  ze_depths_b2: "冥城：孤军深入",
  ze_descent_into_cerberon_v1: "潜入神庙基地",
  ze_desert_fox_v7_6: "沙漠之狐",
  ze_Desperate_Soul_a9: "异闻录：绝望之灵【普难】",
  ze_destruction_of_exorath_v4_lite: "破坏行动",
  ze_dev_r4a_csgo4: "角落开黑",
  ze_dev_Reprise_v1_0: "身法考验",
  ze_diamond_cube_v1: "钻石魔方",
  ze_diddle_v3: "欺骗",
  ze_djinn_go1: "法老陵墓",
  ze_doom3_v2: "毁灭战士3",
  ze_doomsday_bridge_v4: "末日大桥",
  ze_DOOM_p2: "毁灭战士",
  ze_Doorhug_and_Solo_v6_2_g1t: "贴门就能搜楼",
  ze_dragonball_snakeway_v2: "龙珠蛇道逃亡",
  ze_drakelord_castle_b3: "龙爵的移动城堡",
  ze_dreamin_v3_3: "梦之韵",
  ze_dungeon_of_ignorance_a1_2: "遗失地牢",
  ze_dust_escape_p3: "沙漠大逃亡",
  ze_DYSTOPIA_a4: "反乌托邦",
  ze_easy_escape_r: "超级简单的逃亡",
  ze_eden_a3: "色差空间",
  ze_egyptian_b5: "埃及游记",
  ze_egyptian_trip_v1_1: "埃及游记",
  ze_einstein_v7: "爱因斯坦实验室",
  ze_electrical_factory_b3_d: "发电站",
  ze_elevator_escape_p3: "电梯大逃亡",
  ze_eos_forbidden_area_v1_81: "边境保卫战:EOS禁域",
  ze_Ep2_Plant_b1: "逃离!未来环境园",
  ze_epic_escape_v2_1: "史诗逃亡",
  ze_error_a0_ps: "乱码",
  ze_escapetheworld_a33: "逃离异世界",
  ze_escape_cascade_b1: "新逃离地平线【咸】",
  ze_Escape_Citadel_r4: "17号都市要塞【咸】",
  ze_escape_horizon_p3: "逃离地平线",
  ze_escape_stroggos_p2: "逃离斯特罗戈",
  ze_escape_the_eye_p3: "逃离天眼",
  ze_eschaton_a3_1: undefined,
  ze_eternal_grove_v3: "永恒之森",
  ze_eternal_journey_go_v1_4t11: "永恒旅途",
  ze_eternal_void_p3: "永恒空间",
  ze_event_ox_new_year_go2: "快乐就完事了",
  ze_evernight_a3_4: "永夜",
  ze_evil_mansion_v1_finalf: "整蛊之家",
  ze_exchange_innovation_v1bf: "科研大楼逃生",
  ze_fapescape_p5: "乐高大逃亡",
  ze_fapescape_rote_v1_3: "乐高大逃亡：噩梦陷阱",
  ze_farmhouse_v9f2: "坦克农场",
  ze_fartlocker_escape: "陷阱逃生",
  ze_fast_escape_p2: "快速撤离",
  ze_fcescape_b2: "游戏宅房",
  ze_fe8_sacred_stones_v2_2: undefined,
  ze_ffuxx_demon_naramina_a2: "纳拉米娜雪域城堡",
  ze_FFVII_Cosmo_Canyon_v5k_fix: "最终幻想7：宇宙大峡谷",
  ze_ffvii_cosmo_canyon_v6test4: "最终幻想7：宇宙大峡谷v6",
  ze_FFVII_Mako_Reactor_v5_3_v5: "最终幻想7：魔光炉",
  ze_ffvii_mako_reactor_v6_b09k2: "最终幻想7:魔光炉V6",
  ze_ffvii_malgo_reactor_v8_5: "最终幻想7:混搭魔光炉",
  ze_FFVII_Snow_Cosmo_v5_5f: "最终幻想7：雪域峡谷",
  ze_ffvii_temple_ancient_v4_3: "最终幻想7:古代种神殿",
  ze_ffvii_temple_ancient_v5_2: "最终幻想7:古代种神殿",
  ze_ffxii_feywood_b3_1_x6: "最终幻想12：幻妖之森",
  ze_ffxii_feywood_b6_1k: "最终幻想12：幻妖之森",
  ze_FFXII_Mt_Bur_Omisace_v5_4fix4: "最终幻想12：神都布尔奥米赛斯【",
  ze_FFXII_Paramina_Rift_v1_4_a8t: "最终幻想12：帕拉米亚",
  ze_ffxii_ridorana_cataract_t4_ps3: "最终幻想12：里多拉纳大瀑布",
  ze_FFXII_Ridorana_Cataract_t5_3_g3f: "最终幻想12：里多拉纳大瀑布",
  ze_FFXII_Salikawood_v1_6f: "最终幻想12:萨利卡树林",
  ze_ffxii_westersand_v7_z9: "最终幻想12：西沙v7",
  ze_ffxii_westersand_v8zeta1_x18: "最终幻想12：西沙v8",
  ze_FFXIV_Coil_of_Bahamut_v4_4: "最终幻想14:巴哈姆特大迷宫【神",
  ze_ffxiv_wanderers_palace_v2_va2: "最终幻想14:旅神圣域v2",
  ze_ffxiv_wanderers_palace_v4_va2: "最终幻想14:旅神圣域v4",
  ze_FFXIV_Wanderers_Palace_v5_2: "最终幻想14:放浪古神殿v5",
  ze_FFXIV_Wanderers_Palace_v6_2z1: "最终幻想14:放浪古神殿v6",
  ze_ffxxiii_westrcanoyn_f12xd_csgo2: "最终幻想7：西部",
  ze_firewall_laboratory_part1_p2: "防火墙实验室1",
  ze_firewall_laboratory_part2_p2: "防火墙实验室2",
  ze_fire_temple_v2_4: "火炎神庙",
  ze_floating_rocks_survival_csgo_v3: "漂浮岛生存危机",
  ze_flowering_b10: "月神殿前传",
  ze_flower_a1_2_f: "花",
  ze_FLOWER_a3_1: "花",
  ze_flying_world_p: "空中世界: 史诗大冒险",
  ze_fond_dream_h4: "南柯一梦",
  ze_football_go2: "足球大战",
  ze_forbidden_repository_a1_4: "神秘的智慧书库",
  ze_foreign_sand_mix_v2_fix: "魔改高山逃亡：沙暴精灵塔",
  ze_forestbunkers_v1_b3_e2: "丛林惊魂",
  ze_forest_of_steel_z1_4: "钢铁之森",
  ze_forest_r_v1: "迷雾森林",
  ze_forhidden_slicoo_s3_fix: "缩略版禁地斯狄科",
  ze_forhidden_slicoo_v5: "禁地斯狄科X",
  ze_forhidden_void_b3: undefined,
  ze_forhidden_void_b5: "禁地虚空遗迹",
  ze_forsaken_temple_v3_b5: "遗忘神殿",
  ze_freespace_ultimate_b4: "闲置空间",
  ze_frostdrake_tower_v1: "寒霜高塔",
  ze_frozentemple_rc1_1: "冰封神殿",
  ze_frozen_abyss_v1_2: "寒渊",
  ze_funny_runner_v3_1: "娱乐赛跑",
  ze_gameshow_v1_2_csgo1: "游戏真人秀",
  ze_genso_of_last_v3_4_t1: "最后的幻想",
  ze_geometric_v1_4: "几何奥秘",
  ze_ggeasy_solo_win_v1_1: "混搭之城大冒险",
  ze_give_it_a_name_test4: "给这图起个名字",
  ze_gods_wrath_p2: "神降天谴",
  ze_golubenkaya_meow_v1_2: "戈卢本卡亚的猫",
  ze_got_the_north_csgo3: "权力的游戏:北境",
  ze_grand_boatescape_p3: "神舟大逃杀",
  ze_grau_a03_4f: "创世E_格劳",
  ze_great_crate_escape_v6: "神迹逃亡",
  ze_greece_escape_p: "逃脱希腊城",
  ze_greencity_fix: "绿城逃亡",
  ze_grey_world_v1: "灰白世界",
  ze_gris_re_a0_3: undefined,
  ze_gris_v1_13: "创世E：格里斯",
  ze_Halloween_House_b4: "万圣屋",
  ze_halo_ce_p1_b16: "光环:战斗进化",
  ze_halo_p3: "光环",
  ze_halo_poa_p4: "光环行动",
  ze_halo_quarantine_zone_alpha_v6: "光环2:隔离区",
  ze_harry_potter_v2_1_csgo: "哈利波特",
  ze_Haste_to_flee_1b: "逃出生天",
  ze_haunted_lab_escape_p3: "闹鬼实验室",
  ze_hazard_escape_p2: "冒死逃生",
  ze_hello_world_v1: "你好，世界",
  ze_Hell_Escape_p2: "地狱逃亡",
  ze_hidden_fortress_p: "秘密要塞",
  ze_hidden_temple_v2_5: "隐秘神庙",
  ze_hiems_facilities_v3ar_b7_rename: "冬季工厂特别行动",
  ze_highest_to_lowest_v1_1: "高楼逃脱",
  ze_hive_complex_v1_2_1: "生化危机：蜂巢",
  ze_hl2_episodic_escape_f2: undefined,
  ze_hobbit_escape_b2: "(魔戒)霍比特人：哥布林人之战",
  ze_hold2_boring_b5: "学会断后",
  ze_hold_em_v8_f3: "坚守行动",
  ze_hollow_a2: "空洞",
  ze_honkai_impact_3rd_babel_v1_55: "崩坏3：巴比伦塔",
  ze_honkai_impact_3rd_cyberpunk_cityv26_7: "崩坏3:天穹市",
  ze_horizon_sky_escape_v2: "天之边界",
  ze_hsc_a4_q3: "方块世界3",
  ze_huge_labo_escape_b1_2: "高山基地逃亡",
  ze_hydroponic_garden_v1_1: "水培花园",
  ze_hypernova_v2fix: "超新星之旅",
  ze_iamlegend_p3: "鱼图2：我是传奇",
  ze_icecap_escape_v5_p: "西瓜橘子图",
  ze_icecap_solo_v1_f: "阴间版西瓜橘子",
  ze_iceland_escape_v1_2: "冰岛逃亡",
  ze_iceworld_athletic_b4_5: "冰天雪地竞技场",
  ze_ice_cavern_va4: "冰雪大山洞",
  ze_illusory_world_v4_5: "虚空幻境",
  ze_illya_b4_csgo_a3f: "伊利亚城之旅",
  ze_inboxed_final_fix: "身法菜鸟的太平间",
  ze_indiana_jones_v4a_004_p4: "夺宝奇兵",
  ze_industrial_dejavu_g1f: undefined,
  ze_industrial_dejavu_p3: "工业循环",
  ze_infected_lab_v4_1: "感染危机:实验室",
  ze_infected_sewers_csgo: "感染危机:下水道",
  ze_infected_tramway_csgo1: "感染危机:缆车",
  ze_infernal_spire_p2: "地狱尖塔",
  ze_infested_industry_p2: "工业区大撤离",
  ze_infiltration_final_r1: "潜入行动",
  ze_insanitycity_va2: "工业之城",
  ze_insensible_v9_6_fix: "感性之路",
  ze_interception_p2: "窃听计划",
  ze_Island_Escape_p3: "孤岛逃亡",
  ze_isla_nublar_p3: "侏罗纪公园:努布拉岛",
  ze_italy_town_p2: "意大利小镇惊魂",
  ze_japans_3rd_bombing_v8: "最美日本",
  ze_jiangnan_town_v3: "江南水乡",
  ze_jiba_journey_v4_3: "羁绊之旅【难】",
  ze_jjba_v7: "jojo大冒险",
  ze_johnny_nukem_go_b8_3a: "毁灭强尼【神】",
  ze_journey_p4_1: "旅途",
  ze_jungle_escape_v1_2_d: "密林逃脱",
  ze_JurassicPark_Escape_p2: "侏罗纪公园2",
  ze_jurassicpark_evolved_v4: "侏罗纪公园：进化",
  ze_JurassicPark_p3: "侏罗纪公园",
  ze_jurassicpark_sg_final: "逃离侏罗纪公园",
  ze_jurassic_park_story_csgo: "侏罗纪公园的故事",
  ze_k19_escape_go1: "K19核反应堆逃亡",
  ze_kaffe_escape_v2: "喝茶闲聊图",
  ze_kage_a3: "赤影战士",
  ze_kf_bioticslab_a1: "生物实验室",
  ze_Kitchen_v2: "厨房逃亡",
  ze_komatsu_v3: "跳刀精英图",
  ze_kororinpa_v2_2: "转转球迷宫~",
  ze_kraznov_poopata_p2: "天界方块之旅",
  ze_kuwei_0_12: "枯萎",
  ze_l0v0l_v1_4_csgo2: "颜文字(l0v0l)上",
  ze_l4d2_c1m3_mall_csgo_v0_3_le: "求生之路2:购物中心",
  ze_laserend_v3: "跳刀结局图",
  ze_laser_escape_v1_1: "精简版跳刀列车",
  ze_laser_island_b6_8: "跳刀岛逃亡之旅",
  ze_last_man_standing_p2: "拯救世界：一人之巅",
  ze_Last_Man_Standing_v6_T3: "拯救世界：一人之巅【神】",
  ze_legends_of_dawn_v1_6: "黎明传说",
  ze_legoland_crackheads_p2: "乐高世界",
  ze_lemonysnickets_p2: "雷蒙·斯尼奇历险",
  ze_licciana_escape_zrgbr_b3: "陷阱跳刀岛3",
  ze_lightnight_v1_4fix_hdr: "暗夜之光",
  ze_light_shadow_L1_4: "光与暗",
  ze_light_v7_csgo_tk13_v5_2fix: "911之光",
  ze_Lila_Panic_Escape_tr2: "里拉逃亡v3",
  ze_lolxd_final_fix_iswear_v3: "紫色世界v3",
  ze_lostclue_b3_3: "异乱之战【咸】",
  ze_lost_v2_1: "失去",
  ze_LOTR_Helms_Deep_v5_p6: "魔戒2: 圣盔谷",
  ze_lotr_isengard_csgo1: "魔戒2：艾辛格",
  ze_LOTR_Laketown_v3_3: "魔戒：长湖镇",
  ze_LOTR_Minas_Tiret_p2: "魔戒：米纳斯议会",
  ze_lotr_minas_tirith_p5: "魔戒3:米那斯提力斯",
  ze_LOTR_Mines_of_Moria_p2: "魔戒1: 莫瑞亚矿坑",
  ze_LOTR_Mirkwood_v2_5: "魔戒黄金矿工",
  ze_LOTR_Mount_Doom_p3: "魔戒3: 末日火山",
  ze_luciddreams_f5_6: "清醒的梦【普】",
  ze_luck_matters_v3_1: "运气很重要",
  ze_lucy_escape_v1: "猫咪露西逃跑",
  ze_LuigisMansion_p3: "路易基鬼屋",
  ze_lux_umbra_v1: "光与影前传",
  ze_L_The_Lower_v1_4: "艾罗之城第一部",
  ze_L_The_Medium_v1_6: "艾罗之城第二部",
  ze_m0w0m_csgo1: "颜文字(m0w0m)",
  ze_m0w0m_new_k2: undefined,
  ze_mabinogi_f4_1: "洛奇",
  ze_madara_temple_v1fix_csgo: "宇智波斑神庙v1",
  ze_Madara_Temple_v1fix_ez: "宇智波斑神庙",
  ze_magala_castle_final: "麦加乐城堡",
  ze_magic_carpet_p2: "魔毯",
  ze_magmadrake_b4: "炎龙高塔",
  ze_magus_v2_4: "夜莺的星夜幻想",
  ze_mapeadores_museum_v1: "小游戏博物馆【娱】",
  ze_mario_adventure_beta01_fix1: "马里奥的大冒险",
  ze_mario_tower_v4_p2: "超级马里奥：闯关高塔",
  ze_mars_escape_gp3: "火星大逃亡",
  ze_meatropolis_p2: "克苏鲁：血肉幻境",
  ze_megaman_x_2b_fix: "洛克人大冒险",
  ze_melong_dow_learjet_gp1: "里尔喷气机惊险逃亡",
  ze_metro2033_v1_fix_f1: "地铁2033",
  ze_mgden_y3_fix: "弹幕世界",
  ze_military_escape_p4: "军备逃亡",
  ze_MindTree_v1_6: "树之魂",
  ze_minecraft_adventure_v1_3d: "MC大冒险",
  ze_minecraft_escape_b3: "我的世界逃亡",
  ze_minecraft_run_a1_fix8: "我的世界大逃亡",
  ze_minecraft_universe_v1_5: "我的世界：宇宙探秘",
  ze_minecraft_v1_1_p3: "mc一日游",
  ze_minimal_csgo: "极病",
  ze_mirrors_edge_reborn_v4_2_p3_xfix: "镜之边缘：镜面逃脱",
  ze_misaka2_v1_3: "御坂大冒险2",
  ze_misaka_v1ff: "御坂大冒险",
  ze_Mission_1943_fix2: "任务：1943",
  ze_mist_q2: "雾城龙影",
  ze_Mixture_3de_v1f2_g1t: "cs1.6经典地图混搭逃亡",
  ze_mlgsurf_v1_3_4: "米垃圾滑翔",
  ze_mochi_island_f6: "年糕岛",
  ze_mojos_minigames_v1_4_1: "莫霍斯迷你游戏",
  ze_moltentemple_csgo1: "熔火神庙",
  ze_monochrome_v1f: "黑白幻境",
  ze_monolith_csgo: "被遗弃的研究基地",
  ze_moonshadow_ex_v4_1: "月影极限传说",
  ze_moon_base_p3: "月球基地",
  ze_motanuminc_sgfinal: "黑基佬传奇:护菊同盟",
  ze_mountainspire_p2: "高山逃亡",
  ze_mountain_escape_csgo2: "超级爬山（44种模式）",
  ze_mountain_escape_snow_v7_1: "爬雪山",
  ze_mytex_escape_v3_p: "遗迹逃亡",
  ze_m_g_e_b4_5: "音乐小游戏",
  ze_m_the_final_v1_4: "御坂大冒险（下）",
  ze_naiads_v4a_6f: "水泽仙女",
  ze_nameless_necropolis_v3: "虚无古墓【难】",
  ze_namviet_v6_1: "越南猴子林",
  ze_naruto_p: "火影村",
  ze_Natural_v1_4: "自然神殿",
  ze_necromanteion_v3_1: "希腊神殿",
  ze_negative_legacy_va2: "消逝的遗产",
  ze_neglected_v2_2: "忽视",
  ze_neko_canyon_ps3: "尼高峡谷",
  ze_newyork_escape_v1: "纽约逃亡",
  ze_nibui_a3_1a: "钝色之间",
  ze_nightmare_dimension_p3: "噩梦维度",
  ze_noir_p: "黑暗工厂",
  ze_nomada_h3: "无限宫院",
  ze_noob_too_easy_v3_3a: "腥红绝界",
  ze_nora_v1_11: "诺拉",
  ze_nostromo_escape_p2: "逃离太空站",
  ze_nostromo_redux_v1_2: "逃离空间站",
  ze_nothing_alpha2: "湮灭之城2",
  ze_notredame_p4: "時空撕裂者2: 巴黎聖母院",
  ze_no_name_v1_6: "全方位进阶训练",
  ze_no_name_v2_3: "[弹幕]无名",
  ze_no_title_v2_5: "全方位训练",
  ze_nuclear_site_survie_by_gm: "逃离核研究所",
  ze_nuke_p5: "核子危机",
  ze_NY_marathon_p2: "马拉松大追逐",
  ze_obj_blackout_b4: "Obj:封锁",
  ze_obj_insane_v1_2: "Obj:烈火雄心",
  ze_Obj_npst_v1_3fix: "Obj:黑山基地V1",
  ze_obj_npst_v2: "黑山基地NPST",
  ze_Obj_Rampage_v1_2: "横空出世【难】",
  ze_Obj_Rescape_v1: "OBJ:浴火重生",
  ze_obj_vertigo_v3_1: "Obj:殒命大厦",
  ze_obj_void_b4_t2: "Obj:至死不渝",
  ze_oblivion_castle_v6: "遗忘城堡",
  ze_oblivion_mountain_b2k: "遗忘山谷",
  ze_ocean_base_escape_p2: "海洋基地惊魂",
  ze_offliner_v2_csgo1: "单机也要solo给你看",
  ze_omega_p3: "暗夜危机",
  ze_omen_090: "生命预兆",
  ze_omochix_v3_2fix: "元素的神秘",
  ze_oot_shadowtemple_b10: "塞尔达传说：时之笛",
  ze_opti_variety_missions_p3: "合金装备VR任务",
  ze_otakuroom_v5_6_ps: "御宅房",
  ze_outbreak_v2_1_p: "逃出生天",
  ze_Outlast_v2_cm1_fix1: "逃生I【普】",
  ze_outpost_escape_k2: "前哨逃亡",
  ze_palace_adventure_v1_2: "宫殿神秘冒险",
  ze_palace_of_minolila_v1: "米诺莉拉神殿",
  ze_pallaroid_rage_v1: "外星记录：帕拉罗伊德",
  ze_pandora_evolution: "潘多拉-进化",
  ze_pandora_revolutionz_hdr2: "潘多拉：革新",
  ze_panic_escape_v3_2_e5_hdr: "跳刀仓库",
  ze_paper_escaper_p7: "纸质世界",
  ze_paranoid_rezurrection_csgo1: "游乐园：重装上阵",
  ze_parkers_pit_p: "帕克矿坑",
  ze_Parking_p4: "停车场",
  ze_PC_v1_2: "电脑CPU求生【难】",
  ze_pd2_crime_art_v2: "收获日2：美术馆偷窃行动",
  ze_percocet_v5: "止痛",
  ze_peter_mansion_v1_p5: "恐怖公馆",
  ze_phantasy_escape_p3: "幻想逃生",
  ze_pirates_port_royal_v4_2: "加勒比海盗：罗亚尔港v4",
  ze_Pirates_Port_Royal_v5_6: "加勒比海盗：罗亚尔港",
  ze_pitchblack_p2: "星际传奇",
  ze_pixel_fantasy_adv_b2_10: "幻想像素世界冒险",
  ze_pizzatime_v9: "披萨时间",
  ze_pkmn_adventure_v8_5d: "神奇宝贝冒险之旅v8",
  ze_pkmn_adventure_v9_3: "神奇宝贝冒险之旅v9",
  ze_platformer_b2: "浮空岛游戏",
  ze_pokemon_adventure_v1_1: "宠物小精灵冒险之旅",
  ze_Pokemon_Rivals_v1_8: "宠物小精灵：乱斗大作战",
  ze_polatrio_v1_1_hdr: "尼尔：图书馆",
  ze_Polyglot_f3: "阿尔芬城堡",
  ze_ponchermonkey_shooter_csgo1: "庞彻猴枪手",
  ze_portal_story_p2: "传送门故事",
  ze_PoR_island_p3: "岛屿大逃离",
  ze_postal_v1_1: "夺命邮差",
  ze_PotC_IV_p3: "加勒比海盗IV",
  ze_PotC_p4: "加勒比海盗",
  ze_Predator_Ultimate_p7: "铁血战士",
  ze_project_alcaria_x2: "阿卡利亚计划",
  ze_prototype_p2: "虐杀原形",
  ze_purgatorium_b1fix2: "涤罪炼狱",
  ze_puta_p3: "工厂危机",
  ze_quiver_v2a_f1: undefined,
  ze_Rabanastre_Royal_t5: "最终幻想12：拉巴纳斯塔王都",
  ze_raccoon_facility_v6b_p: "生化危机：浣熊市工厂",
  ze_radio_building_v1_3: "无线电大楼",
  ze_rainbow_factory_v2: "彩虹工厂",
  ze_raintime1_torontoisland_v23: "时落之雨",
  ze_raintime1_torontoisland_v5x: "时落之雨(旧)",
  ze_raintime2_stormwindkeep_v3: "时雨2风暴守护者",
  ze_raintimex_code0_v22: "时落之雨X",
  ze_ramp_a1_1: "圣殿遗迹",
  ze_randomizer_c1: "阴间版随机小游戏",
  ze_random_escape_csgo: "新随机小游戏",
  ze_random_p2_fix: "随机小游戏",
  ze_Ratescape_v5_4: "玩具奇兵【神】",
  ze_rats_escape_final: "巨人厨房",
  ze_realm_f3: "意境",
  ze_reconnoiter_b5: "侦查行动",
  ze_ReflectBox_L: "陷阱逃亡图2",
  ze_reloaded_v1f: "合金装备",
  ze_resonance_cascade_p3_fix: "逃离黑山基地",
  ze_retribution_p2: "复仇行动",
  ze_Reverse_a03_f3: "镜像颠倒",
  ze_revue_starlight_v3: "少女歌剧院",
  ze_rev_a6_3: "异度守坚战",
  ze_re_creation_v2_25: "复刻世界",
  ze_re_surf_skyline_b0_11: "复刻之天际滑翔",
  ze_ripsuhdude_v1_6: "地下工厂",
  ze_river_escape_v3_fix_r1: "码头逃亡",
  ze_rizomata_a46: "精灵塔（上）",
  ze_rizomata_b45: "精灵塔（下）",
  ze_rockescape_go2_1: "石山逃亡",
  ze_rocket_escape_g1: "火箭逃离",
  ze_rooftop_madness_v1_9_csgo: "城市天际线",
  ze_Rooftop_Runaway_Extended: "逃离屋顶加长版",
  ze_roof_adventure_v8f: "屋顶大冒险v8",
  ze_roof_adventure_v9: "屋顶大冒险v9: 逃出生天",
  ze_roscente_go1: "罗森特教堂",
  ze_RTCW_Ominous_Rumors_p4: "重返德军总部",
  ze_ruin_of_black_stone_v2: "黑石废墟【普难】",
  ze_ruminas_v12_f: "鲁米纳斯",
  ze_rush_B_v1_4: "rushB",
  ze_rush_B_v2_2: "rushB v2",
  ze_R_W_B_ulti: "红黑白的乐章",
  ze_sakuzyo_b2: "自然的秘神",
  ze_samsung_galaxy_v1_3: "这跳刀我上我也行",
  ze_sam_hd_v1_fix: "新英雄萨姆",
  ze_SANCTUARY_v1_2: "圣城",
  ze_sandstorm_go_v1_5: "新沙尘暴",
  ze_sandstorm_v7_1_e4: "沙尘暴",
  ze_santassination_v3: "狮子王",
  ze_saw_p3: "电锯惊魂",
  ze_scourge_k1: undefined,
  ze_scp_containment_breach_v1_b02_cm4: "scp研究所",
  ze_sc_turtles_v5_p2: "乌龟岛之旅",
  ze_seano_see_2g5: "玄之海",
  ze_secret_grimoires_b5: "魔法奥秘",
  ze_sele_a2_1: "梦中的灵堂",
  ze_serious_sam_tfe_v2_6: "英雄萨姆",
  ze_serpentis_temple_csgo5: "美杜莎神庙",
  ze_serpentis_temple_v2a_csgo2: "美杜莎神庙",
  ze_SEVIIEN_a1: "未来花园",
  ze_sewage_processing_v8: "污水处理厂危机",
  ze_sewer_escape_p3: "下水道逃亡",
  ze_sewer_v2: "下水道",
  ze_sg1_missions_v2_1_p2: "星际之门",
  ze_shadow_corridor_v1_2: "影廊",
  ze_Shadow_temple_v4_4: "血影神殿",
  ze_shaun_of_the_dead_p: "僵尸肖恩",
  ze_shaurma_v3_b07_csgo: "苏卡不俩特",
  ze_showdown_v4_1_p: "巅峰之战",
  ze_ShroomForest2_p6: "蘑菇森林2",
  ze_ShroomForest3_p: "蘑菇森林3",
  ze_ShroomForest_p6: "蘑菇森林1",
  ze_Siberia_1990_v1_2c_p5: "西伯利亚大危机",
  ze_silent_hill_2_illusion_b5: "寂静岭2：幻境",
  ze_silent_hill_3_dawn_full_t3: "寂静岭3:黎明",
  ze_silent_hill_blackblood_f6: "寂静岭:黑血",
  ze_sit_caelum_paradisus_b7_hdr: "雕刻天堂",
  ze_skill_escape_v10: "KZ训练场",
  ze_skygarden_v2_1: "天穹树",
  ze_skyline_v1: "逃出生天",
  ze_Skyscraper_city_r2: "镜之边缘：大厦飞驰",
  ze_sky_athletic_adv_v9_13: "天空竞技",
  ze_sky_creamus_v2: undefined,
  ze_sky_fantasy_v1_6: "天空幻想v1",
  ze_sky_fantasy_v2_1: "天空幻想",
  ze_sky_journey_v8: "天空旅途",
  ze_sky_temples_v3: "天空神庙",
  ze_slender_escape_rc2: "瘦长鬼影",
  ze_snowescape_p2: "雪原逃亡",
  ze_somnium_illusione_t3: "精神分裂",
  ze_sonic_cityescape_beta1919_810: "索尼克城市逃亡",
  ze_sorrento_escape_v2: "惊险刺激的索伦托重置版",
  ze_spacestation_sgfix: "空间站",
  ze_space_escape_b1_2: undefined,
  ze_space_flight_p3: "逃离太空站2",
  ze_square_r: "方形列阵",
  ze_sst2_p: "星河舰队2",
  ze_sst_b2_1_p5: "星河舰队1",
  ze_stalkermonolit_v8gofix1: "核电站遗迹",
  ze_Stalker_Ultimate_v2_3_gg: "切尔诺贝利核电站",
  ze_stalker_ultimate_v4_9: "切尔诺贝利核电站",
  ze_standart_map_csgo_b1: "CS起源经典地图混搭",
  ze_stargate_escape_v8_p2: "星际之门大逃亡",
  ze_starwars_v2fix_csgo3: "星球大战",
  ze_star_wars_prequel_f1: "星球大战前传",
  ze_stilshrine_of_miriam_v6_2: "最终幻想12：米利暗遗迹【神】",
  ze_stilshrine_of_miriam_v7_2fix: "最终幻想12：米利暗遗迹",
  ze_strange_escape_p2: "绝境逃亡",
  ze_street_fight_with_autism_v2: undefined,
  ze_suchirifu_v3_1_h: "斯基利弗树林迷宫",
  ze_SUMAI_facility_v1a: "速卖金字塔",
  ze_sunkentemple_v3_1: "魔兽世界：沉没的神庙",
  ze_sunlight_p2: "日光",
  ze_supershitshow_a2: "惊险刺激的蛇皮山",
  ze_Super_Metroid_v4: "超级银河战士",
  ze_surface_a1_ps_b2: "矿井逃亡",
  ze_surf_bona_v1_3: "飘移滑翔",
  ze_surf_danger_p2: "危险的滑翔",
  ze_surf_dark_fantasy_v2go2: "滑翔逃亡黑暗幻想",
  ze_surf_daybreak_v1_k2: undefined,
  ze_surf_easy_v1_3: "简单的滑翔",
  ze_surf_facility_p4: "金字塔滑翔",
  ze_surf_froyo_lite_v2_4: "缩略版酸奶滑翔",
  ze_surf_froyo_v2_2: "酸奶滑翔",
  ze_surf_galaxy_zena_v4_2B4: "银河滑翔【滑】",
  ze_surf_gypt_v1_3_1f: "大金字塔滑翔",
  ze_surf_happy_b7: "快乐滑翔",
  ze_surf_inferno_003: "沙盒滑翔【滑】",
  ze_surf_inferno_v2_22: "沙盒滑翔",
  ze_surf_last_point_v1_5: "最终之战滑翔",
  ze_surf_next_step_v1_4: "滑翔下一步",
  ze_surf_outside_csgo1: "奥德赛滑翔",
  ze_surf_sahok_p3: "密室滑翔",
  ze_surf_saltfish_csgo4: "咸鱼的滑翔",
  ze_surf_shonyudo_v1: "山涧幽谷滑翔旧版",
  ze_surf_shonyudo_v5_2: "山涧幽谷大滑翔",
  ze_surf_vortex_v2_6: "漩涡滑翔",
  ze_SURVIVORS_p2: "幸存者",
  ze_S_A_M_v1_7: "剑与魔法",
  ze_taboo_carnation_v2_ps2: "博尼塔尼亚半岛行动",
  ze_teletraan_v1: "变形金刚之旅",
  ze_temple_escape_va3: "神庙逃亡",
  ze_temple_of_phantom_v1p_2: "幻影神殿",
  ze_temple_of_the_demon_god_v2: "恶魔神圣殿",
  ze_temple_raider_b4_ps6: "神庙急袭",
  ze_Temple_Run_v5: "神庙逃亡",
  ze_tenkinoko_welkin_v1_6f: "天气之子",
  ze_tesv_skyrim_v5_6: "上古卷轴5：天际",
  ze_texturescape_p2: "陷阱逃脱图",
  ze_th06_scarletDevilMansion_a0c: "幻想乡：红魔馆",
  ze_thelostworld_redux_p2: "侏罗纪公园：失落之岛",
  ze_thelostworld_v2_csgo: "失落的世界",
  ze_the_curse_of_blackwater_v6b: "黑水镇的诅咒",
  ze_the_last_chapter_v1_5: "终焉之章",
  ze_the_lost_tomb_b3_3_1: "失落的古墓",
  ze_the_new_era_of_crazy_escape_b7: "新疯狂大逃亡",
  ze_thousand_steps_gf1_2: "千步先走一步",
  ze_three_eyes_v1_1: "三眼逃亡",
  ze_thriller_escape_p: "迈克杰克逊_颤栗逃亡",
  ze_tibia_v4_1: "探险卢克加德岛【普难】",
  ze_tilex_possession_v2_12: "列车逃亡",
  ze_tilex_ultimate_v2_13e: "列车逃亡终极版",
  ze_timesink_v1_2: "时光沙漏",
  ze_timesplitters_p2: "時空撕裂者",
  ze_titanic_escape_v2_3_fix1: "泰坦尼克号惊魂",
  ze_titan_souls_b1_8: "泰坦之魂",
  ze_tkara_v4_3: "tkara大逃亡",
  ze_tloz_stone_tower_temple_v1_4e: "塞尔达颠倒石之塔",
  ze_toaster_p3: "烤面包机惊魂",
  ze_totally_new_wester_f: "最终幻想12：圣诞节西沙",
  ze_Totemo_Roka_v1: "洛卡之城",
  ze_touhou_gensokyo_o4: "东方幻想乡-阿尔法幻境3",
  ze_townscape_vfinallqfix2: "小镇逃亡之旅",
  ze_toy_world_final: "玩具哲学世界",
  ze_traak_b2: "逃命游轮",
  ze_trainescape_final_p2: "火车大撤退",
  ze_trials_v1_4_hdr_test3: "天国审判",
  ze_tropico_escape_gf1_1: "热带岛屿逃亡",
  ze_turokbase_p3: "图罗克基地",
  ze_TV_station_r4: "电视台",
  ze_tyranny2_v1_csgo2: "暴君2",
  ze_tyranny_v5_go3: "暴君",
  ze_ubermenschen_b2: "虐杀原形:超凡者",
  ze_Uchiha_Legacy_cm2_fix: "宇智波庙",
  ze_ultimate_cancer_v1_1: "病名为战斗民族",
  ze_ultra_ungent_a2: undefined,
  ze_undercave_es_mi_v1_5: "地底洞穴",
  ze_underground_escape_p: "地下逃亡之旅",
  ze_underground_station_v3: "地铁逃亡",
  ze_undersea_temple_a4_4: "海底神殿",
  ze_undertale_g_v1_3_fix1: "传说之下：安黛因",
  ze_undertale_sans_final: "传说之下：sans审判",
  ze_undertunnel_escape_b5_csgo: "地下隧道逃生",
  ze_unknown_underground_a2_8_2: "未知的秘密工厂",
  ze_unknow_escape_v5: "未知大逃亡",
  ze_unreasonable_sacrifice_v1_2_7: "不要当工具人",
  ze_uranus_attack_b4: "天熊下凡",
  ze_urbanterror_b2: "毁灭行动",
  ze_urban_laby_of_death_p2: "城市迷宫",
  ze_UT2004_Convoy_r5: "虚幻竞技场",
  ze_uyuni_v1_6: "乌尤尼",
  ze_v0u0v_csgo1: "v颜0文0字v",
  ze_valkvang_v1_2: "瓦尔克狱堡",
  ze_valleyescape_v1: "奇妙山谷",
  ze_variis_b1_4: "影子人之谜",
  ze_venice_escape_p3: "威尼斯水域大逃亡",
  ze_vertigo_militia_b1_3_14: "危楼逃兵",
  ze_vietnam_p3: "越南小雨林",
  ze_visional_chaos_d6: "幻视",
  ze_visualizer_v1_2: "监视者",
  ze_volcano_escape_p2: "火山逃亡",
  ze_voodoo_islands_p5: "巫毒岛惊魂",
  ze_war_v1_4: "天空争霸",
  ze_watagi_tunnel_v1_1: "钟乳洞外传:渡木隧道",
  ze_whothefuckiam_v2_4: "我是哪个",
  ze_worlds_v1_2: "世界大逃亡",
  ze_world_escapes_v1: "世界大逃亡",
  ze_wow_molten_core_t1_1: "熔火之心",
  ze_xiii_winslow_bank_v2_2fix_4: "金库惊魂",
  ze_yueyingchuanshuo_10_9_f3: "月影传说",
  ze_yurilnier_beta007_hdr: "幽莉兰尼尔雪域之城",
  ze_zakum: "冒险岛扎昆",
  ze_zk_fapescape_p3: "缩略版乐高大逃亡",
  ze_zk_mall_of_zombies_p2: "购物中心大逃亡",
  ze_zombierig_p3: "钻井平台惊魂",
  ze_zombie_city_finalfix_ps2: "僵尸城市大对决",
  ze_zulu_v2: "祖鲁"
}

const main = async () => {
  const dict = {}
  // 93X
  Object.keys(mapchiname_93x).forEach((key) => {
    dict[key] = mapchiname_93x[key]
  })
  // ZED

  // UB
  const res = await axios.get("https://game.moeub.cn/api/maps?current=1&pageSize=10000&page=1")
  const list = res.data.data.data
  for (const item of list) {
    dict[item.name] = item.label
  }

  console.log(JSON.stringify(dict))
}

main()
