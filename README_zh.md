# Helios Tracker 太阳追踪器

实时太阳追踪模拟系统，带有3D可视化界面和电机控制计算。

![太阳追踪器](https://img.shields.io/badge/React-19-blue.svg)
![SunCalc3](https://img.shields.io/badge/SunCalc3-orange.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.183-orange.svg)

> 📖 [English Version](./README.md)

## 功能特性

- 🌞 实时太阳位置计算（高度角 & 方位角）使用 SunCalc3
- 🪞 使用平分法计算电机角度
- 🌍 时区同步（亚洲/上海 UTC+8）
- 🎮 时间模拟：播放/暂停/快进/快退控制
- 📅 日期选择器：支持历史/未来模拟
- 🎨 Three.js 3D可视化
- 📊 实时遥测仪表盘

## 项目截图

![主界面](./screenshot.png)

## 快速开始

### 开发环境

```bash
npm install
npm run dev
```

打开 http://localhost:3000

### 生产构建

```bash
npm run build
```

从 `dist/` 目录提供静态文件。

## 配置参数

编辑 `src/App.tsx` 修改默认参数：

```typescript
const [lat] = useState(31.23);   // 纬度
const [lon] = useState(121.47);  // 经度
```

## 项目结构

```
helios-tracker/
├── src/
│   ├── components/           # UI 组件
│   ├── lib/solar.ts        # SunCalc3 太阳计算
│   ├── App.tsx            # 主应用
│   └── main.tsx           # 入口文件
├── package.json           # Node 依赖
├── vite.config.ts         # Vite 配置
└── README_zh.md         # 本文件
```

## 技术栈

- **前端**: React 19, TypeScript, Three.js, Tailwind CSS v4, Framer Motion, Lucide React
- **计算**: SunCalc3（浏览器端）
- **构建**: Vite

## 许可证

See [LICENSE](./LICENSE) for details.