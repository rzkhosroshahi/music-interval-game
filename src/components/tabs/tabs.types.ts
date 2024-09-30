export type Tab = {
    name: string,
}

export type TabsProps = {
    tabList: Tab[],
    activeTab: string,
    onClick: (tabName: string) => void,
}