"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorCommunityMemberService = void 0;
const data_1 = require("../../../data");
class CreatorCommunityMemberService {
    execute(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = new data_1.CommunityMember();
            member.name = dto.name;
            member.email = dto.email;
            member.phone = dto.phone;
            member.city = dto.city;
            member.country = dto.country;
            member.accepted_terms = dto.accepted_terms;
            member.message = dto.message;
            try {
                yield member.save();
                return {
                    message: 'Community member registered successfully',
                    data: member
                };
            }
            catch (error) {
                // Manejo específico si el email ya existe
                if (error.code === '23505') { // Postgres unique violation
                    throw new Error('Email already registered');
                }
                console.error('Error creating community member:', error);
                throw new Error('Failed to register community member');
            }
        });
    }
}
exports.CreatorCommunityMemberService = CreatorCommunityMemberService;
