<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>其他链接</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">其他链接</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="6" v-for="link in links" :key="link.name">
              <a @click="presentAlert(link.addr)">
                <ion-card>
                  <ion-card-header>
                    <ion-card-title>{{ link.name }}</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    {{ link.desc }}
                  </ion-card-content>
                </ion-card>
              </a>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  alertController,
} from "@ionic/vue";

export default {
  name: "Links",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
  },

  data() {
    return {
      links: [
        {
          name: "明日方舟官网",
          addr: "http://ak.hypergryph.com/",
          desc: "明日方舟官方网站",
        },
        {
          name: "NGA",
          addr: "http://bbs.nga.cn/thread.php?fid=-34587507",
          desc: "明日方舟-罗德岛驻艾泽拉斯大使馆",
        },
      ],
    };
  },

  methods: {
    async presentAlert(addr) {
      const alert = await alertController.create({
        header: "提示",
        message: "是否前往" + addr + "？",
        buttons: [
          {
            text: "确认",
            handler: () => {
              window.location.href = addr;
            },
          },
          {
            text: "取消",
            handler: () => {},
          },
        ],
      });
      return alert.present();
    },
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