import Vue from 'vue'

export default {

  update (id, data) {
    return new Promise(resolve => {
      Vue.axios.put(`/agents/${id}`, data).then(response => {
        resolve(response.data)
      })
    })
  },

  getList () {
    return new Promise(resolve => {
      Vue.axios.get('/agents').then(response => {
        resolve(response.data)
      })
    })
  },

  getTotal () {
    return new Promise(resolve => {
      Vue.axios.get('/agents').then(response => {
        // 计算总数
        // (若数据量大而且有分页功能，那么应该在该接口中加入总数的相关字段，而不是由前端来计算总数。)
        const data = {
          status: {
            building: 0,
            idle: 0,
          },
          type: {
            physical: 0,
            virtual: 0,
          },
        }
        response.data.forEach(e => {
          data.status[e.status]++
          data.type[e.type]++
        })
        resolve(data)
      })
    })
  },

  delete (id) {
    return new Promise(resolve => {
      Vue.axios.delete(`/agents/${id}`).then(response => {
        resolve(response.data)
      })
    })
  },
}
