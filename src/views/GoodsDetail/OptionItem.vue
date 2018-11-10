<template>
  <v-item class="option-item">
    <!-- 옵션 정보 -->
    <div class="title">
      <v-h size="fourth" theme="dark" class="info">색상 {{color}} | 사이즈 {{size}} </v-h>
      <div class="stock">({{stock}} 개 남음)</div>
    </div>
    <!-- 이 옵션 아이템 제거하기 버튼-->
    <v-remove @click="$emit('popThis')"/>
    <!-- 수량 입력 Form -->
    <v-number v-model="bufferCount" :max="stock" :min="1" />
  </v-item>
</template>

<script>
import VH from '@/components/H/Index';
import VItem from '@/components/Item/Index';
import VNumber from '@/components/Form/Number.vue';
import VRemove from '@/components/Button/Remove.vue';

export default {
  /*
  Goods Detail View 에 종속되는 Option Item. 
  Option 선택 후 Silder 에서 수량을 조절할 때 쓰입니다.
  */
  name: 'option-item',
  
  components:{
    VH,
    VItem,
    VNumber,
    VRemove,
  },

  props:{
    color:{
      type: String,
      required: false,
      default: "색상 x",
    },
    size:{
      type: String, 
      required: false,
      default: "사이즈 x",
    },
    stock:{
      type: Number,
      required: false,
      default: 0,
    },
    count:{
      type: Number,
      required: false,
      default: 0,
    }
  },
  data(){
    return {
      bufferCount: this.count,
    }
  },

  watch:{
    bufferCount: function(val){
      this.$emit('update:count', val);
    }, 
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';

  .option-item{
    .title{
      display: flex;
      .info{
        margin-right: 10px;
      }
      .stock{
        font-size: 11px;
        color: $color-gray-600;
      }      
    }

  }
</style>


