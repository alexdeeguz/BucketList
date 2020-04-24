export const fetchAllItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/bucket_list_items"
    })
)

export const fetchItem = id => (
    $.ajax({
        method: "GET",
        url: `/api/bucket_list_items/${id}`
    })
)

export const postItem = bucket_list_item => (
    $.ajax({
        method: "POST",
        url: "/api/bucket_list_items",
        data: { bucket_list_item }
    })
)

export const updateItem = (id, bucket_list_item) => (
    $.ajax({
        method: "PATCH",
        url: `/api/bucket_list_items/${id}`,
        data: { bucket_list_item }
    })
)

export const deleteItem = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/bucket_list_items/${id}`
    })
)