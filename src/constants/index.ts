import {
  ChallengeIcon,
  CloseIcon,
  InfoIcon,
  MenuIcon,
  RecordIcon,
  KnifeIcon,
  CupIcon,
} from "@/components/Icons";
import React from "react";

import RecommendImg1 from "../assets/images/MyRecommend-1.png";
import RecommendImg2 from "../assets/images/MyRecommend-2.png";
import RecommendImg3 from "../assets/images/MyRecommend-3.png";

export const DATETIME_FORMAT = "YYYY.MM.DD HH:mm";

export const MONTH_YEAR_FORMAT = "MM.YY";

export const FOOTER_ITEMS = [
  { name: "会員登録", href: "#" },
  { name: "運営会社", href: "#" },
  { name: "利用規約", href: "#" },
  { name: "個人情報の取扱について", href: "#" },
  { name: "特定商取引法に基づく表記", href: "#" },
  { name: "お問い合わせ", href: "#" },
];

export const MENU = {
  icon: React.createElement(MenuIcon),
  closeIcon: React.createElement(CloseIcon),
};

export const NAVIGATION = [
  {
    name: "自分の記録",
    enName: "record",
    href: "/record",
    icon: React.createElement(RecordIcon),
    current: true,
  },
  {
    name: "チャレンジ",
    enName: "badge",
    href: "*",
    icon: React.createElement(ChallengeIcon),
    current: false,
  },
  {
    name: "お知らせ",
    enName: "info",
    href: "*",
    icon: React.createElement(InfoIcon),
  },
];

export const MENU_NAVIGATION = [
  { name: "自分の記録", href: "/record" },
  { name: "体重グラフ", href: "*", },
  { name: "目標", href: "*", },
  { name: "選択中のコース", href: "*", },
  { name: "コラム一覧", href: "/column" },
  { name: "設定", href: "*", },
];

export const COLUMN_PAGE_NAVIGATE_BUTTONS = [
  {
    engTitle: "RECOMMENDED COLUMN",
    jpTitle: "オススメ",
    direct: "",
  },
  {
    engTitle: "RECOMMENDED DIET",
    jpTitle: "ダイエット",
    direct: "",
  },
  {
    engTitle: "RECOMMENDED BEAUTY",
    jpTitle: "美容",
    direct: "",
  },
  {
    engTitle: "RECOMMENDED HEALTH",
    jpTitle: "健康",
    direct: "",
  },
];

export const RECORD_PAGE_NAVIGATE_BUTTONS = [
  {
    id: "body-record",
    engTitle: "BODY RECORD",
    jpTitle: "自分のカラダの記録",
    image: RecommendImg1,
  },
  {
    id: "my-exercise",
    engTitle: "MY EXERCISE",
    jpTitle: "自分の運動の記録",
    image: RecommendImg2,
  },
  {
    id: "my-diary",
    engTitle: "MY DIARY",
    jpTitle: "自分の日記",
    image: RecommendImg3,
  },
];

export const MEAL_TYPE = ["Morning", "Lunch", "Dinner", "Snack", "all"]

export const MEAL_BUTTON_GROUP = [
  {
    name: MEAL_TYPE[0],
    icon: React.createElement(KnifeIcon),
  },
  {
    name: MEAL_TYPE[1],
    icon: React.createElement(KnifeIcon),
  },
  {
    name: MEAL_TYPE[2],
    icon: React.createElement(KnifeIcon),
  },
  {
    name: MEAL_TYPE[3],
    icon: React.createElement(CupIcon),
  },
];
