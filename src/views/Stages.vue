<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>关卡掉落</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">关卡掉落</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
          <ion-row v-for="stage in stages" :key="stage.stageName">
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-title> </ion-card-title>
                </ion-card-header>
                <ion-card-content> </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default {
  name: "Stages",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      stages: [
        // some example data of recently popular stages
        {
          stageName: "WD-8 大雪将至",
          stageId: "act18d0_08",
          itemName: "RMA70-12",
          itemId: "30103",
          apCost: 18,
          quantity: 0,
          times: 0,
        },
        {
          stageName: "WD-7 家园",
          stageId: "act18d0_07",
          itemName: "酮凝集组",
          itemId: "30053",
          apCost: 18,
          quantity: 0,
          times: 0,
        },
        {
          stageName: "WD-6 帕夏的梦",
          stageId: "act18d0_06",
          itemName: "聚酸酯组",
          itemId: "30033",
          apCost: 15,
          quantity: 0,
          times: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>