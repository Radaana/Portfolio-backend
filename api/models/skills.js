const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
  id: {
    type: Number,
    required: [true, 'Укажите номер скила']
  },
  name: {
    type: String,
    required: [true, 'Укажите название скила']
  },
  percents: {
    type: Number,
    required: [true, 'Укажите процент']
  },
  type: {
    type: Number,
    required: [true, 'Укажите тип (F, W, B)']
  }
});

// просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);