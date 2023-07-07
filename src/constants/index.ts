import {
  ChallengeIcon,
  CloseIcon,
  InfoIcon,
  MenuIcon,
  RecordIcon,
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
    href: "#",
    icon: React.createElement(RecordIcon),
    current: true,
  },
  {
    name: "チャレンジ",
    href: "#",
    icon: React.createElement(ChallengeIcon),
    current: false,
  },
  {
    name: "お知らせ",
    href: "#",
    icon: React.createElement(InfoIcon),
    current: false,
  },
];

export const MENU_NAVIGATION = [
  { name: "自分の記録", href: "#" },
  { name: "体重グラフ", href: "#" },
  { name: "目標", href: "#" },
  { name: "選択中のコース", href: "#" },
  { name: "コラム一覧", href: "#" },
  { name: "設定", href: "#" },
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
    engTitle: "BODY RECORD",
    jpTitle: "自分のカラダの記録",
    image: RecommendImg1,
    direct: "",
  },
  {
    engTitle: "MY EXERCISE",
    jpTitle: "自分の運動の記録",
    image: RecommendImg2,
    direct: "",
  },
  {
    engTitle: "MY DIARY",
    jpTitle: "自分の日記",
    image: RecommendImg3,
    direct: "",
  },
];
