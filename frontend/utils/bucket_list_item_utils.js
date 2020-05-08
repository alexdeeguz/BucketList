export const fetchAllItems = () => (
    $.ajax({
        method: 'GET',
        url: `/api/bucket_list_items`
    })
)

export const createItem = bucket_list_item => (
    $.ajax({
        method: 'POST',
        url: `/api/bucket_list_items`,
        data: { bucket_list_item }
    })
)