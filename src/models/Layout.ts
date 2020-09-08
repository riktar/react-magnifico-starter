import {types} from "mobx-state-tree";

const Layout = types
  .model({
    sidebar: types.maybe(types.frozen())
  })
  .actions(self => ({
    toggleSidebar() {
      const sidebar = {...self.sidebar}
      sidebar.open = !sidebar.open
      sidebar.width = sidebar.open ? sidebar.openedWidth : sidebar.collapsedWidth
      self.sidebar = sidebar
    }
  }))
  .views(self => ({
    calculate() {
      console.log((window.innerWidth > 700) ? self.sidebar.width : (self.sidebar.open) ? self.sidebar.responsive : 0)
      return (window.innerWidth > 700) ? self.sidebar.width : (self.sidebar.open) ? self.sidebar.responsive : 0
    }
  }));


export default Layout
