<template>
  <div class="agent-list">
    <ul>
      <li class="item" v-for="(item, id) in list" :key="id">
        <div class="item-logo">
          <img :src="`/images/${item.os}.png`">
        </div>
        <div class="item-info">
          <div class="top">
            <div class="origin nowrap">
              <FontIcon :type="`desktop`" :size="16"></FontIcon>
              <span class="data">
                <a href="">{{item.name}}</a>
              </span>
            </div>
            <div class="status">
              <button v-if="item.status === 'idle'" class="btn primary sm">{{item.status}}</button>
              <button v-else class="btn warning sm">{{item.status}}</button>
            </div>
            <div class="ip nowrap">
              <FontIcon :type="`info`" :size="16"></FontIcon>
              <span class="data">{{item.ip}}</span>
            </div>
            <div class="location nowrap">
              <FontIcon :type="`folder`" :size="16"></FontIcon>
              <span class="data">{{item.location}}</span>
            </div>
          </div>
          <div class="bottom">
            <div class="plus">
              <ResourceWindow :id="item.id" v-on:addResource="addResource"></ResourceWindow>
            </div>
            <div class="resources">
              <button
                v-for="resource in item.resources"
                :key="resource"
                class="btn md"
                >
                <span>{{resource}}</span>
                <FontIcon
                  :type="`trash`"
                  @click="deleteResource(item.id, resource)"
                ></FontIcon>
              </button>
            </div>
            <div class="change-status">
              <button class="btn info">
                <FontIcon :type="`deny`" :size="16"></FontIcon>
                <span>Deny</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import agent from "@/api/agent.js"

export default {
  data() {
    return {
      list: {},
    }
  },
  methods: {
    addResource(e) {
      if(e.resources.length > 0 && e.resources[0]) {
        // 获取完整数据
        const data = this.list[e.id]
        const sourceLength = data.resources.length
        data.resources = Array.from(new Set([...e.resources, ...data.resources]))
        if(data.resources.length === sourceLength) {
          alert('该项已存在')
          return
        }
        this.update(e.id, data)
      }
    },
    deleteResource(id, name) {
      // 获取完整数据
      const data = this.list[id]
      data.resources = data.resources.filter(e => e !== name)
      this.update(id, data)
    },
    update(id, data) {
      // 发起请求
      agent.update(id, data)
        .then(() => {
          // alert('更新成功')
        })
    },
    getList() {
      agent.getList({type: ''})
        .then(res => {
          if(Array.isArray(res)) {
            res.forEach(resource => {
              this.$set(this.list, resource.id, resource)
            })
          }
        })
    },
  },
  mounted() {
    this.getList()
  },
}
</script>

<style lang="scss" scoped>
  .agent-list {
    width: auto;
    height: auto;
    li.item {
      position: relative;
      width: 100%;
      margin-top: 12px;
      min-height: 120px;
      padding: 20px 18px;
      background-color: #fff;
      .item-logo {
        float: left;
        width: 80px;
        height: 80px;
        margin-right: 18px;
      }
      .item-info {
        display: block;
        position: relative;
        margin-left: 98px;
        min-height: 80px;
        .top {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          i {
            color: $de_gray_color;
          }
          .data {
            padding-left: 8px;
          }
          .origin {
            width: 40%;
            a {
              color: $info_color;
              font-weight: bold;
            }
          }
          .status {
            width: 10%;
          }
          .ip {
            width: 25%;
          }
          .location {
            width: 25%;
          }
        }
        .bottom {
          display: block;
          width: 100%;
          margin-top: 34px;
          .plus {
            float: left;
          }
          .resources {
            float: left;
            width: 80%;
            .btn {
              margin: 0 0 8px 12px;
            }
          }
          .change-status {
            float: right;
          }
        }
        .bottom::after {
          content: "";
          display: block;
          height: 0;
          visibility: hidden;
          clear: both;
        }
      }
    }
  }
</style>
