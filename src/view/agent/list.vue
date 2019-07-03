<template>
  <div class="agent-list">
    <ul>
      <li class="item">
        <div class="item-logo">
          <img src="@/assets/images/cent_os.png" alt="">
        </div>
        <div class="item-info">
          <div class="top">
            <div class="origin">
              <FontIcon :class="`icon-desktop`" :size="16"></FontIcon>
              <span class="data">
                <a href="">fdsfdsffds3.thougntworks.com</a>
              </span>
            </div>
            <div class="status">
              <button class="btn primary sm">idle</button>
            </div>
            <div class="ip">
              <FontIcon :class="`icon-info`" :size="16"></FontIcon>
              <span class="data">192.168.0.1</span>
            </div>
            <div class="path">
              <FontIcon :class="`icon-folder`" :size="16"></FontIcon>
              <span class="data">/var/lib/cruise-agent</span>
            </div>
          </div>
          <div class="bottom">
            <div class="plus">
              <button class="btn md info">
                <FontIcon :class="`icon-plus`"></FontIcon>
              </button>
            </div>
            <div class="resources">
              <button class="btn md">
                <span>Chrom</span>
                <FontIcon :class="`icon-trash`"></FontIcon>
              </button>
            </div>
            <div class="change-status">
              <button class="btn info">
                <FontIcon :class="`icon-deny`" :size="16"></FontIcon>
                <span>Deny</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .agent-list {
    width: auto;
    height: auto;
    li.item {
      position: relative;
      width: 100%;
      margin-top: 12px;
      height: 120px;
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
        height: 80px;
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
          .path {
            width: 25%;
          }
        }
        .bottom {
          position: absolute;
          width: 100%;
          left: 0;
          height: 30px;
          bottom: 0;
          .plus {
            float: left;
          }
          .resources {
            float: left;
            .btn {
              margin-left: 12px;
            }
          }
          .change-status {
            float: right;
          }
        }
      }
    }
  }
</style>
