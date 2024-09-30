export type Tab = {
    name: string,
    Component: React.ReactNode,
}

export type TabsProps = {
    tabList: Tab[],
    activeTab: string,
    onClick: (tabName: string) => void,
}