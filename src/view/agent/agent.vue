<template>
  <div class="agent">
    <div class="count">
      <div class="card-type-1 warning">
        <span class="card-name">
          Building
        </span>
        <div class="card-bg-icon rotate">
          <FontIcon :type="`cog`" :opacity="`0.2`"></FontIcon>
        </div>
        <span class="card-num">
          {{building}}
        </span>
      </div>
      <div class="card-type-1 primary">
        <span class="card-name">
          Idle
        </span>
        <div class="card-bg-icon">
          <FontIcon :type="`coffee`" :opacity="`0.2`"></FontIcon>
        </div>
        <span class="card-num">
          {{idle}}
        </span>
      </div>
      <div class="card-type-2">
        <div class="item">
          <span class="card-name">ALL</span>
          <span class="card-num">
            {{physical + virtual}}
          </span>
        </div>
        <div class="item">
          <span class="card-name">PHYSICAL</span>
          <span class="card-num">
            {{physical}}
          </span>
        </div>
        <div class="item">
          <span class="card-name">VIRTUAL</span>
          <span class="card-num">
            {{virtual}}
          </span>
        </div>
      </div>
    </div>

    <div class="tab">
      <ul class="tab-item">
        <li>
          <router-link :to="`/agent`">All</router-link>
        </li>
        <li>
          <router-link :to="`/agent/physical`">Physical</router-link>
        </li>
        <li>
          <router-link :to="`/agent/virtual`">Virtual</router-link>
        </li>
      </ul>
      <div class="tab-input">
        <FontIcon :type="`search`" :size="16"></FontIcon>
        <input type="text">
      </div>
      <div class="tab-menu">
        <div class="tab-menu-icon">
          <FontIcon :type="`th-card`" :size="18"></FontIcon>
          <FontIcon :type="`th-list`" :size="18" class="active"></FontIcon>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import agent from "@/api/agent.js"

export default {
  data() {
    return {
      building: 0,
      idle: 0,
      physical: 0,
      virtual: 0,
    }
  },
  mounted() {
    agent.getTotal()
      .then(data => {
        this.building = data.status.building
        this.idle = data.status.idle
        this.physical = data.type.physical
        this.virtual = data.type.virtual
      })
  },
}
</script>

<style lang="scss" scoped>
  .agent {
    .count {
      display: flex;
      justify-content: space-between;
    }
    .tab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 20px;
      background: #fff;
      .tab-item {
        display: flex;
        width: $card_width;
        li {
          width: 100px;
          a {
            display: flex;
            height: 50px;
            justify-content: center;
            align-items: center;
            color: $default_color;
            border-bottom: 3px solid #fff;
            border-right: 1px solid $gray_color;
            &:hover {
              color: $info_color;
              border-bottom: 3px solid $info_color;
            }
          }
          a.router-link-active {
            color: $info_color;
            border-bottom: 3px solid $info_color;
          }
        }
      }
      .tab-input {
        display: inline-block;
        position: relative;
        width: $card_width;
        input {
          padding: 0 0 0 28px;
          width: 200px;
          background: $gray_color;
          height: 30px;
          box-shadow: rgba(0, 0, 0, 0.2) -1px -1px 1px;
          outline: none;
        }
        .icon {
          position: absolute;
          width: auto;
          height: auto;
          left: 6px;
          top: 50%;
          margin-top: -8px;
        }
      }
      .tab-menu {
        position: relative;
        height: 30px;
        width: $card_width;
        .tab-menu-icon {
          position: absolute;
          right: 0;
          color: $default_color;
          i {
            margin: 0 12px;
            cursor: pointer;
            &:hover {
              color: $info_color
            }
          }
          i.active {
            color: $info_color;
          }
        }
      }
    }
  }
  .card-type-1, .card-type-2 {
    position: relative;
    width: $card_width;
    min-width: $card_height;
    height: $card_height;
    color: #fff;
    background: #fff;
  }
  .card-type-1.primary {
    background: $primary_color;
  }
  .card-type-1.warning {
    background: $warning_color;
  }

  .card-type-1 {
    text-align: center;
    overflow: hidden;
    .card-bg-icon {
      width: $card_height;
      height: $card_height;
      margin: 0 auto;
      text-align: center;
      .icon {
        font-size: $card_height;
      }
    }
    .card-bg-icon.rotate {
      animation: card_icon_rotate 2s linear infinite;
    }
    @keyframes card_icon_rotate {
      0% {
        transform: rotate(0)
      }
      100% {
        transform: rotate(360deg)
      }
    }
    .card-name {
      position: absolute;
      top: 12px;
      left: 12px;
      font-size: 18px;
      font-weight: bold;
    }
    .card-num {
      position: absolute;
      bottom: 0px;
      right: 20px;
      font-size: 48px;
    }
  }
  .card-type-2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: $default_color;
    .item {
      display: flex;
      height: 74%;
      justify-content: space-between;
      flex-direction: column;
      width: 86px;
      .card-name {
        width: 100%;
        text-align: center;
        font-size: 12px;
      }
      .card-num {
        width: 100%;
        text-align: center;
        font-size: 20px;
      }
    }
  }

</style>
