import prisma from "../prisma";

import { Request, Response } from "express";

const showjogadores = async (req: Request, res: Response) => {
  try {
    const showjogadores = await prisma.jogadores.findMany();
    
    console.log(showjogadores);
    return res.status(200).json(showjogadores);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ocorreu um problema no server!" });
  }
};

export default showjogadores;
