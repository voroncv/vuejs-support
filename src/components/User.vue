<template>
  <div class="user">
    <div class="col-md-4">
        <ul class="list-group" >
          <a class="list-group-item" @click="onselect(item, false, false)" v-for="item in userTickets">
            <p><b>{{ item.title }} </b><span v-if="item.newForClient == true" class="badge">&nbsp;</span></p>
            <p>ID: {{ item.id }}</p>
            <p>{{ item.author }}</p>
          </a>
        </ul>
      </div>
      <div class="col-md-8">
      <h1 v-if="userTickets.length <= 0" class="text-center">Ничего не найдено!</h1>
        <h1 v-else="selectItem.length <= 0" v-show="selectItem.length <= 0" class="text-center">Здесь все вопросы, которые когда либо задавал юзер кроме выполненных</h1>
        <div v-if="selectItem">
          <div v-for="item in selectItem" v-if="userTickets.length > 0">
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
            <div class="form" v-if="item.status != 'complete'">
              <p><b>Начать беседу с клиентом</b></p>
                <div class="form-group">
                  <textarea class="form-control" @keyup.enter.prevent="newMessageUser(item, messageText)" rows="3" v-model="messageText"></textarea>
                  <br>
                  <button type="submit" class="btn btn-primary" @click="newMessageUser(item, messageText)">Отправить</button>
                  <button type="submit" class="btn btn-danger pull-right" @click="complete(item)">Закрыть тему</button>
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
  name: 'user',
  data() {
    return {
      messageText: ''
    }
  },
  methods: {
   	onselect(item, support, client) {
      this.$store.dispatch({type: 'selectItem', item, support, client})
    },
    newMessageUser(item, text) {
      this.$store.dispatch({ type: 'newMessageUser', item, text })
      this.messageText = ''
    },
    complete(item) {
      this.$store.dispatch('complete', item)
    }
  },
  computed: {
    ...mapGetters({
      userTickets: 'userTickets',
      selectItem: 'selectItem'
    })
  }
}
</script>