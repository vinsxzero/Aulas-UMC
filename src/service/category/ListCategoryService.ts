class ListCategoryService{
    async execute(){
        const category = [
            {
                name: "Papelaria",
                description: "Itens de papelaria volta às aulas 2025"
            }
        ]
        return category
    }
}
export{ ListCategoryService}