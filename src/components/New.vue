<template>
  <div class="new">
      <div class="col-md-12">
        <div class="new" v-show="!success">
          <h1 class="text-center">Создать новый вопрос для техподдержки</h1>
          <form onsubmit="return false">
            <div class="form-group">
              <label for="title">Заголовок</label>
              <input type="text" v-model="title" class="form-control" id="title" placeholder="Заголовок" required>
            </div>
            <div class="form-group">
              <label for="problem">Ваша проблема</label>
              <textarea rows="3" v-model="problem" class="form-control" id="problem" placeholder="Ваша проблема" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="newTicket(title, problem, allTickets.length+1)">Создать</button>
          </form>
        </div>
        <div class="complete" v-show="success">
          <h1 class="text-center">Ваше обращение добавлено!</h1>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'new',
  data() {
    return {
      title: '',
      problem: '',
      success: false
    }
  },
  methods: {
    newTicket(title, problem, id) {
        if(title == '' || problem == '') return false
        this.$store.dispatch({ type: 'newTicket', title, problem, id })
        this.success = !this.success
      }
    },
    computed: {
    ...mapGetters({
      allTickets: 'allTickets',
    })
  }
  }
</script>