<template>
  <div class="home">
    <header>
      <div class="head">
        <div class="logo">
          <Logo></Logo>
        </div>
        <div class="user-info">
          <img src="/images/user.jpg" alt="">
        </div>
      </div>
    </header>
    <div class="content">
      <nav>
        <div class="menu">
          <ul>
            <li class="menu-item" v-for="(item, i) in menus" :key="i">
              <router-link :to="item['to']">
                <span class="menu-item-icon">
                  <FontIcon :type="item['icon']" :size="18"></FontIcon>
                </span>
                <span class="menu-item-name">{{item['name']}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="history">
          <h2>History</h2>
          <ul>
            <li class="nowrap">
              <span>bjstdmngbr02/Acessptance_test</span>
            </li>
            <li>
              <span>bjstdmngbr04/Acessptance_test</span>
            </li>
            <li>
              <span>bjstdmngbr02/Acessptance_test</span>
            </li>
            <li>
              <span>bjstdmngbr02/Acessptance_test</span>
            </li>
            <li>
              <span>bjstdmngbr02/Acessptance_test</span>
            </li>
            <li>
              <span>bjstdmngbr02/Acessptance_test</span>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .content {
    position: relative;
    width: $content_width;
    min-width: 1320px;
    margin: 0 auto;
  }
  .home {
    background: $de_gray_color;
    min-height: 100vh;
    header {
      position: fixed;
      float: left;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      background: #FFF;
      box-shadow: rgba($color: $de_gray_color, $alpha: 0.4) 1px 1px 1px 1px;
      .head {
        display: flex;
        width: 100%;
        height: $head_height;
        align-items: center;
        justify-content: center;
        .logo {
          display: inline-block;
        }
        .user-info {
          position: absolute;
          right: 50px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    nav {
      position: fixed;
      background: $default_color;
      width: $menu_width;
      height: 100vh;
      padding: 0 0 30px 0;
      padding-top: $head_height;
      z-index: 1;
      .menu {
        margin-top: 20px;
        ul {
          .menu-item {
            display: flex;
            a {
              display: flex;
              align-items: center;
              width: 100%;
              padding: 10px 30px;
              height: 45px;
              color: $gray_color;
              span {
                line-height: 25px;
              }
              .menu-item-name {
                padding-left: 12px;
              }
              &:hover {
                background: $de_default_color;
                color: $info_color;
              }
            }
            a.router-link-active {
                background: $de_default_color;
                color: $info_color;
            }
          }
        }
      }
      .history {
        position: absolute;
        padding: 0 12px;
        bottom: 0;
        height: 300px;
        width: 100%;
        color: $gray_color;
        h2 {
          color: #ccc;
        }
        ul {
          list-style: square;
          margin-left: 20px;
          color: #999;
          li {
            width: 100%;
            list-style: square inside;
          }
        }
      }
    }
    main {
      padding: $head_height+12px 28px 12px $menu-width+28px;
    }
  }
</style>
<script>
import Logo from "@/assets/svgs/logo.svg"
export default {
  components: { Logo },
  data() {
    return {
      router: {
        path: '',
      },
    }
  },
  computed: {
    "menus"(){
      return [
        {
          name: "DASHBOARD",
          icon: "dashboard",
          to: "/dashboard",
        },
        {
          name: "AGENT",
          icon: "sitemap",
          to: "/agent",
        },
        {
          name: "MY CRUISE",
          icon: "boat",
          to: "/cruise",
        },
        {
          name: "HELP",
          icon: "life-bouy",
          to: "/help",
        },
      ]
    },
  },
}
</script>

