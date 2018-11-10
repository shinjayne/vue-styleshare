<template>
  <v-card>
    <div class="spread">
      <v-checkbox :value="checked" @click="$emit('check')"/>
      <div class="right">
        지우기 <v-remove @click="$emit('remove')" size="big" class="remove"/>
      </div>
    </div>
    <v-img class="image"/>
    <v-h class="head" size="fourth">{{provider}}</v-h>
    <v-h class="head" size="second">{{name}}</v-h>
    <!-- <v-button color="white" size="small" @click="$emit('click')">상세보기</v-button> -->

    <!-- 선택한 옵션 리스트 -->
    <v-item v-for="selected in selectedOptions" :key="selected.option.id" class="selected">
      <v-h size="fourth" theme="dark">색상 {{selected.option.color}} | 사이즈 {{selected.option.size}} </v-h>
      <v-h size="third" theme="blue">{{selected.count}} 개</v-h>
    </v-item>

    <!-- 총액 보여주기 -->
    <div class="right">
      <v-h size="third" theme="red">총 {{priceSum}} 원</v-h>
    </div>
  </v-card>  
</template>

<script>
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VImg from '@/components/Img/Index';
import VRemove from '@/components/Button/Remove';
import VButton from '@/components/Button/Index';
import VItem from '@/components/Item/Index';
import VCheckbox from '@/components/Form/Checkbox.vue';

export default {
  /*
  Basket View 에 종속된, 해당 항목과 Option 에 대한 정보를 담는 카드입니다.
  */
  name: 'goods-and-options-card',

  components: {
    VCard,
    VH,
    VImg,
    VRemove,
    VButton,
    VItem,
    VCheckbox,
  },

  props: {
    /*
    상품의 이름
    */
    name: {
      type: String,
      required: false,
      default: '이름 없는 상품',
    },
    provider: {
      type: String,
      required: false,
      default: '이름 없는 제공자',
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    selectedOptions: {
      type: Array,
      required: false,
      default: ()=>[],
    },
    checked:{
      /*
      체크된 상품인지 여부
      */
     type: Boolean,
     required: false,
     default: false,
    }
  },

  computed:{
    priceSum(){
      let totalCount = 0;
      this.selectedOptions.map(selected=>{totalCount+=selected.count});
      return totalCount * this.price;
    },
  }
}
</script>


<style lang="scss" scoped>
  .remove{
    margin-left: 10px;
  }
  .image{
    height: 200px;
    margin-bottom: 20px;
  }
  .head{
    margin-bottom: 10px;
  }
  .right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .spread{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;    
  }
  .selected{
    margin-bottom: 10px;
  }
</style>



