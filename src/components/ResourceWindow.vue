<template>
    <div class="btn-window"
        v-click-outside="onClickoutside"
        >
        <slot v-bind:val="val">
            <button class="btn md info" @click="openWindow()">
                <FontIcon :type="`plus`"></FontIcon>
            </button>
        </slot>
        <div class="pos-window" v-show="show">
            <div class="window">
                <div class="arrow"><div class="arrow2"></div></div>
                <div class="close" @click="closeWindow">
                    <FontIcon :type="`close`" :size="24"></FontIcon>
                </div>
                <div class="content">
                    <div class="tip">
                        Separate multiple resource name with commas
                    </div>

                    <input type="text" v-model="val" placeholder="e.g. Chrome, Firefox">

                    <div class="buttons">
                        <button class="btn info md" @click="addResource()">
                            Add Resources
                        </button>
                        <button class="btn default md" @click="closeWindow()">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {directive as clickOutside} from 'v-click-outside-x'

export default {
  name: "ResourceWindow",
  directives: { clickOutside },
  props:  ['id'],
  data() {
    return {
      show: false,
      val: '',
    }
  },
  computed: {
    resources(){
      let resourceList = this.val.split(',')
      let tmpList = []
      for (let i = 0; i < resourceList.length;i++) {
          resourceList[i] = resourceList[i].trim()
          if (resourceList[i]) {
              tmpList.push(resourceList[i])
          }
      }
      return tmpList
    },
  },
  methods: {
    openWindow() {
      this.show = true
    },
    closeWindow() {
      this.show = false
      this.val = ''
    },
    addResource() {
      this.$emit('addResource', {
        id: this.id,
        resources: this.resources,
      })
      this.closeWindow()
    },
    onClickoutside () {
      this.closeWindow()
    },
  },
}
</script>

<style lang="scss" scoped>
    .btn-window {
        position: relative;
    }
    .pos-window {
        position: absolute;
        left: -16px;
        top: 56px;
        z-index: 100;
        .window {
            width: 640px;
            height: 140px;
            padding: 24px 12px 12px 12px;
            background: #fff;
            border: 2px solid $info_color;
            .close {
                position: absolute;
                right: 12px;
                top: 6px;
                color: $info_color;
                cursor: pointer;
            }
            .content {
                input {
                    position: relative;
                    display: inline-block;
                    margin: 8px 0 16px 0;
                    width: 100%;
                    height: 32px;
                    line-height: 1.5;
                    padding: 4px 7px;
                    font-size: 12px;
                    border: 1px solid #dddee1;
                    border-radius: 4px;
                    color: $info_color;
                    background-color: #fff;
                    background-image: none;
                    cursor: text;
                    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
                }
                .buttons {
                    button {
                        width: 130px;
                        margin-right: 12px;
                    }
                }
            }
            .arrow {
                position: absolute;
                top: -28px;
                left: 23px;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 30px solid $info_color;
                .arrow2 {
                    position: absolute;
                    top: 4px;
                    left: -8px;
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 26px solid #fff;
                }
            }
        }
    }
</style>
