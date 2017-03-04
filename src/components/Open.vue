<template>
  <div class="open">
    <div class="col-md-4">
        <ul class="list-group" >
          <a class="list-group-item" @click="onselect(item, false, false)" v-for="item in openTickets">
            <p><b>{{ item.title }} </b><span v-if="item.newForSupport == true" class="badge">&nbsp;</span></p>
            <p>ID: {{ item.id }}</p>
            <p>{{ item.author }}</p>
          </a>
        </ul>
      </div>
      <div class="col-md-8">
      <h1 v-if="openTickets.length <= 0" class="text-center">Ничего не найдено!</h1>
        <h1 v-else="selectItem.length <= 0" v-show="selectItem.length <= 0" class="text-center">Выберите диалог слева чтобы начать</h1>
        <div v-if="selectItem">
          <div v-for="item in selectItem" v-if="openTickets.length > 0">
            <ol class="breadcrumb">
              <li class="active">Вопрос <b># {{ item.id }}</b> &nbsp;&nbsp;&nbsp; Статус:
                <b v-if="item.status == 'open'">Открытый</b>
                <b v-if="item.status == 'process'">В процессе</b>
                <b v-if="item.status == 'complete'">Решенный</b>
              </li>
            </ol>
              <div class="panel panel-default">
                <div class="panel-heading">
                  {{ item.author }}
                  <br>
                  <b>{{ item.title }}</b>
                </div>
            <div class="panel-body">
              <div v-for="message in item.messages">
                <p>
                  <b v-if="message.author == 'support'">Поддержка : </b>
                  <b v-if="message.author == 'client'">Клиент : </b>
                  {{ message.text }}</p>
              </div>
            </div>
            <hr>
            <div class="form" v-if="item.status != 'process'">
              <p><b>Начать беседу с клиентом</b></p>
                <div class="form-group">
                  <textarea class="form-control" @keyup.enter.prevent="newMessageSupport(item, messageText)" rows="3" v-model="messageText"></textarea>
                  <br>
                  <button type="submit" class="btn btn-primary" @click="newMessageSupport(item, messageText)">Отправить</button>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'open',
  data() {
    return {
      messageText: ''
    }
  },
  methods: {
    onselect(item, support, client) {
      this.$store.dispatch({type: 'selectItem', item, support, client})
    },
    newMessageSupport(item, text) {
      this.$store.dispatch({ type: 'newMessageSupport', item, text })
      this.messageText = ''
    }
  },
  computed: {
    ...mapGetters({
      openTickets: 'openTickets',
      selectItem: 'selectItem'
    })
  }
}
</script>