import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./users";

jest.mock('axios');

describe('load users', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Tony'
                }, 
                {
                    id: 2,
                    name: 'Egor'
                }, 
                {
                    id: 3,
                    name: 'Adam'
                }, 
            ]
        }
    })
    
    test('load users test', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toHaveBeenCalledTimes(1);
        screen.debug();
    });
});