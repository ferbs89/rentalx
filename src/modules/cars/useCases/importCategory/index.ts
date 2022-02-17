import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesReposity = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesReposity);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
