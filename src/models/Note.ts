import mongoose, { Schema, Document } from 'mongoose';

export interface INoteDocument extends Document {
  title: string;
  content: string;
  category?: string;
  tags: string[];
  color?: string;
  userId: mongoose.Types.ObjectId;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema<INoteDocument>({
  title: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true,
    maxlength: [100, 'Título não pode ter mais de 100 caracteres']
  },
  content: {
    type: String,
    required: [true, 'Conteúdo é obrigatório']
  },
  category: {
    type: String,
    trim: true,
    default: 'Geral'
  },
  tags: [{
    type: String,
    trim: true
  }],
  color: {
    type: String,
    default: '#ffffff'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPinned: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Índice para busca rápida
NoteSchema.index({ userId: 1, createdAt: -1 });
NoteSchema.index({ title: 'text', content: 'text' });

export default mongoose.model<INoteDocument>('Note', NoteSchema);