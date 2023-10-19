import mongoose from 'mongoose';

mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "",
    message: ({path}) => `The field ${path} was provided in blanck.`
  });
