import { TabsProps } from "./tabs.types";
import style from './style.module.css'

export const Tabs = ({ tabList, activeTab, onClick }: TabsProps) => {
    return (
        <div className={style.container}>
            {
                tabList.map((tab) => (
                    <div
                        key={tab.name}
                        onClick={() => onClick(tab.name)}
                        className={`${style.tab} ${tab.name === activeTab ? style.activeTab : ''}`}
                    >
                        {tab.name}
                    </div>
                ))
            }
        </div>

    )
}