<template>
  <div @click="logClick">
    <slot></slot>
  </div>
</template>
<script>
import utils from "../../utils";

export default {
  props: ["eventId", "eventData"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    getPageId() {
      let parentName = this.$parent.$options.name;

      let pageid = parentName.replace(/_/g, ":");

      return pageid;
    },
    logEvent(id, data) {
      if (id) {
        id = id.replace(/_/g, ":");

        let pageId = this.getPageId();

        let jsonEventData = {};

        if (data) {
          if (data.id) {
            jsonEventData.id = data.id;
          }
        }

        let jsonData = {
          pageId: pageId,
          eventId: id,
          eventData: JSON.stringify(jsonEventData || {})
        };

        if (window.goods) {
          try {
            window.goods.addEventRecord(JSON.stringify(jsonData));
          } catch (e) {
            console.log(e);
          }
        }
        console.log("事件日志:");
        console.log(jsonData);

        return new Promise((resolve, reject) => {
          resolve(true);
        });
      }
    },
    logClick(event) {
      if (this.eventId) {
        console.log("log click...");
        this.logEvent(this.eventId, this.eventData).then(result => {
          this.$emit("click");
        });
      } else {
        this.$emit("click");
      }
    }
  }
};
</script>
