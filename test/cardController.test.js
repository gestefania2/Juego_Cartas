import { jest } from "@jest/globals";
import cardController from "../src/controllers/card/cardController.js";
import cardModel from "../src/models/cardModel.js"
import categoryModel from "../src/models/categoryModel.js";

cardModel.findAll = jest.fn();
cardModel.findByPk = jest.fn();
cardModel.create = jest.fn();
cardModel.update = jest.fn();
cardModel.destroy = jest.fn();


categoryModel.findByPk = jest.fn();

describe("Card Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Limpiar los mocks antes de cada prueba
        cardModel.findAll = jest.fn();
        categoryModel.findByPk = jest.fn();

    });

    describe("getAllCards", () => {
        it("should return all cards", async () => {
            const mockCards = [
                { id: 1, text: "Carta 1", type: "question", category_id: 1, player_id: null },
                { id: 2, text: "Carta 2", type: "answer", category_id: 1, player_id: 1 },
            ];
            cardModel.findAll.mockResolvedValueOnce(mockCards);

            const result = await cardController.getAllCards();
            expect(result).toEqual(mockCards);
        });

        it("should return cards for a specific player", async () => {
            const mockCards = [
                { id: 2, text: "Carta 2", type: "answer", category_id: 1, player_id: 1 },
            ];
            cardModel.findAll.mockResolvedValueOnce(mockCards);

            const result = await cardController.getAllCards(1);
            expect(result).toEqual(mockCards);
        });
    });

  });

  describe("getCardById", () => {
    it("should return a card by id", async () => {
        const mockCard = { id: 1, text: "Carta 1", type: "question", category_id: 1, player_id: null };
        cardModel.findByPk.mockResolvedValueOnce(mockCard); // Mockea el comportamiento de findByPk

        const result = await cardController.getCardById(1);
        expect(result).toEqual(mockCard);
    });

    it("should return null if card not found", async () => {
        cardModel.findByPk.mockResolvedValueOnce(null); // Mockea el caso donde no se encuentra la carta

        const result = await cardController.getCardById(1);
        expect(result).toBeNull();
    });
});

describe("createCard", () => {
    it("should create a new card", async () => {
        const mockCard = { id: 1, text: "Nueva Carta", type: "question", category_id: 1, player_id: null };
        cardModel.create.mockResolvedValueOnce(mockCard);

        const result = await cardController.createCard("Nueva Carta", "question", 1, null);
        expect(result).toEqual(mockCard);
    });
});

describe("updateCardById", () => {
    it("should update a card by id", async () => {
        // Simulando una instancia de Sequelize
        const mockCardInstance = {
            id: 1,
            text: "Carta 1",
            type: "question",
            category_id: 1,
            player_id: null,
            save: jest.fn().mockResolvedValueOnce(true)  // Simulamos el método save
        };

        cardModel.findByPk.mockResolvedValueOnce(mockCardInstance); // Simulamos la búsqueda del card por ID
        cardModel.update.mockResolvedValueOnce([1]); // Simulamos que la actualización fue exitosa

        const result = await cardController.updateCardById(1, "Carta Actualizada", "answer", 1);
        expect(result.text).toEqual("Carta Actualizada");
        expect(result.type).toEqual("answer");

        // Verificamos que el método save fue llamado
        expect(mockCardInstance.save).toHaveBeenCalled();
    });
});

describe("removeCard", () => {
    it("should remove a card by id", async () => {
        // Simulando una instancia de Sequelize
        const mockCardInstance = {
            id: 1,
            text: "Carta 1",
            type: "question",
            category_id: 1,
            player_id: null,
            destroy: jest.fn().mockResolvedValueOnce(true)  // Simulamos el método destroy
        };

        cardModel.findByPk.mockResolvedValueOnce(mockCardInstance); // Simulamos la búsqueda del card por ID
        cardModel.destroy.mockResolvedValueOnce(true); // Simulamos que la destrucción fue exitosa

        const result = await cardController.removeCard(1);
        expect(result.message).toBe("Carta eliminada correctamente");

        // Verificamos que el método destroy fue llamado
        expect(mockCardInstance.destroy).toHaveBeenCalled();
    });
});
