import {flow, types} from "mobx-state-tree";
import axios from "axios"

const Dashboard = types
  .model('Dashboard', {
    users: types.model('DashboardUsers', {
      data: types.maybe(types.union(types.null,types.array(types.frozen()))),
      loading: false
    })
  })
  .actions(self => ({
    fetchUsers: flow(function* () {
      self.users.loading = true
      self.users.data = []
      try {
        const users = yield axios.get(`https://jsonplaceholder.typicode.com/users`)
        self.users.loading = false
        self.users.data = users.data
      } catch
        (error) {
        self.users.loading = false
      }
    }),
  }));


export default Dashboard
