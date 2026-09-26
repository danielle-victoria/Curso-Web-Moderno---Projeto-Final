/* Aula 18 Projeto Base de Conhecimento - Backend: API de Artigo #02 */

module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
                WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories    
    `
}