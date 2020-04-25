export const fetchAllSubcategories = () => (
    $.ajax({
        method: "GET",
        url: "/api/subcategories"
    })
)

export const postSubcatgory = subcategory => (
    $.ajax({
        method: "POST",
        url: "/api/subcategories",
        data: { subcategory }
    })
)

export const updateSubcategory = (id, subcategory) => (
    $.ajax({
        method: "PATCH",
        url: `/api/subcategories/${id}`,
        data: { subcategory }
    })
)

export const deleteSubcategory = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/subcategories/${id}`
    })
)