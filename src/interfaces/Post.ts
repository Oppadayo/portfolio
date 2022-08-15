export interface PostInterface {
			object: string,
			id: string,
			created_time: string,
			last_edited_time: string,
			created_by: {
				object: string,
				id: string
			},
			last_edited_by: {
				object: string,
				id: string
			},
			cover: string,
			icon: string,
			parent: {
				type: string,
				database_id: string
			},
			archived: boolean,
			properties: {
				created: {
					id: string
				},
				"created by": {
					id: string
				},
				status: {
					id: string
				},
				tdited: {
					id: string
				},
				tags: {
					id: string
				},
				Name: {
					id: string
				}
			},
			url: string
    }
  