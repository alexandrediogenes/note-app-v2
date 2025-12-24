import { Response } from 'express';
import Note from '../models/Note';
import { AuthRequest } from '../types';

export const createNote = async (req: AuthRequest, res: Response) => {
  try {
    const note = await Note.create({
      ...req.body,
      userId: req.userId
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar nota' });
  }
};

export const getNotes = async (req: AuthRequest, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { category, isPinned, q } = req.query;

    const filter: any = {
      userId: req.userId
    };

    if (category) {
      filter.category = category;
    }

    if (isPinned !== undefined) {
      filter.isPinned = isPinned === 'true';
    }

    if (q) {
      filter.$text = { $search: q as string };
    }

    const total = await Note.countDocuments(filter);

    const notes = await Note.find(filter)
      .sort({ isPinned: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      data: notes
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notas' });
  }
};


export const updateNote = async (req: AuthRequest, res: Response) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Nota não encontrada' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar nota' });
  }
};

export const deleteNote = async (req: AuthRequest, res: Response) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!note) {
      return res.status(404).json({ message: 'Nota não encontrada' });
    }

    res.json({ message: 'Nota removida com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar nota' });
  }
};
