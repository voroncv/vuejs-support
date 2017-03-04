<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand">Техподдержка</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link @click.native="clearCache()" exact active-class="active" tag="li" to="/">
              <a>Открытые вопросы
                ({{openTickets.length}})
              </a>
            </router-link>
            <router-link @click.native="clearCache()" exact active-class="active" tag="li" to="/process">
              <a>В процессе
                ({{processTickets.length}})
              </a>
            </router-link>
            <router-link @click.native="clearCache()" exact active-class="active" tag="li" to="/complete"><a>Решенные
              ({{completeTickets.length}})
            </a>
            </router-link>
            <router-link @click.native="clearCache()" exact active-class="active" tag="li" to="/user"><a>Вид для клиента</a></router-link>
            <router-link @click.native="clearCache()" exact active-class="active" tag="li" to="/new"><a>Новый вопрос</a></router-link>
          </ul>
        </div>
      </div>
      </nav>
      <div class="container">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      // Грузим JSON данные с удаленного сервера
      dataJsonFile: 'https://api.myjson.com/bins/xtjq9'
    }
  },
  // Чистим кеш выбранного итема
  methods: {
    clearCache() {
      this.$store.state.support.selectItem = []
    },
    getAll() {
      this.$http.get(this.dataJsonFile).then(response => this.$store.commit('loadData', response.data))
    }
  },
  computed: {
    ...mapGetters({
      openTickets: 'openTickets',
      processTickets: 'processTickets',
      completeTickets: 'completeTickets'
    })
  },
  created() {
    this.getAll()
  }
}
</script>

<style>
.list-group-item {
  cursor: pointer;
}

.form {
  margin: 10px;
}

.badge {
  width: 10px;
    height: 10px;
    background-color: #5cb85c;
    padding: 0;
}

textarea {
  resize: none;
}
</style>
