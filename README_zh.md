# Helios Tracker 太阳追踪器

实时太阳追踪模拟系统，带有3D可视化界面和电机控制计算。

![太阳追踪器](https://img.shields.io/badge/React-19-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.183-orange.svg)

> 📖 [English Version](./README.md)

## 功能特性

- 🌞 实时太阳位置计算（高度角 & 方位角）
- 🪞 使用平分法计算电机角度
- 🌍 时区同步（亚洲/上海 UTC+8）
- 🎮 时间模拟：播放/暂停/快进/快退控制
- 📅 日期选择器：支持历史/未来模拟
- 🎨 Three.js 3D可视化
- 📊 实时遥测仪表盘

## 项目截图

![主界面](./screenshots.png)

## 快速开始

### 开发环境

```bash
# 后端（终端 1）
cd backend
python -m uvicorn main:app --reload --port 8000

# 前端（终端 2）
cd frontend
npm install
npm run dev
```

打开 http://localhost:3000 - 前端代理 API 请求到后端。

### 生产构建

```bash
# 构建前端
cd frontend
npm run build

# 运行后端（从 backend/static 提供静态文件）
cd ../backend
python -m uvicorn main:app --port 8000
```

## 配置参数

编辑 `backend/main.py` 修改默认参数：

```python
config = {
    "lat": 31.23,           # 纬度
    "lon": 121.47,         # 经度
    "target_azimuth": 25.0, # 目标反射方向
    "target_altitude": 10.0, # 目标反射高度
    "timezone": "Asia/Shanghai"
}
```

## API 接口

| 接口 | 描述 |
|------|------|
| `GET /` | 主界面 |
| `GET /calculate` | 获取太阳位置和电机角度 |
| `GET /sunrise_sunset` | 获取日出日落时间 |

## 项目结构

```
helios-tracker/
├── frontend/                 # React + Vite + Three.js
│   ├── src/
│   │   ├── components/       # UI 组件
│   │   ├── lib/             # 太阳计算逻辑
│   │   ├── App.tsx           # 主应用
│   │   └── main.tsx          # 入口文件
│   ├── package.json
│   └── vite.config.ts       # Vite 配置（含代理）
│
├── backend/                  # FastAPI Python 后端
│   ├── main.py              # FastAPI 服务器
│   ├── tracker_logic.py    # pysolar 太阳计算
│   └── static/              # 构建后的前端（生产环境）
│
├── pyproject.toml           # Python 依赖
├── package.json             # Node 依赖（供参考）
└── README_zh.md            # 本文件
```

## 技术栈

- **前端**: React 19, TypeScript, Three.js, Tailwind CSS v4, Framer Motion, Lucide React
- **后端**: FastAPI, pysolar, pytz
- **构建**: Vite, UV 包管理器

## 许可证

See [LICENSE](./LICENSE) for details.