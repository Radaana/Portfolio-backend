const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  WorksSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите описание картинки']
    },
    tech: {
      type: String,
      required: [true, 'Укажите стек технологий']
    },
    picture: {
      type: String
    },
    link: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('works', WorksSchema);